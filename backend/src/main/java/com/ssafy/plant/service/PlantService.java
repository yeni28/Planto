package com.ssafy.plant.service;

import com.ssafy.plant.components.XmlPlantDetailResponse;
import com.ssafy.plant.components.XmlPlantResponse;
import com.ssafy.plant.domain.PlantDictEntity;
import com.ssafy.plant.repository.PlantDictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

@Service
public class PlantService {
    @Value("${java.plant.secretKey}")
    private String secretKey;

    @Autowired
    private PlantDictRepository plantDictRepository;

    public void getPlant(){
//        page 가져오기
        for (int i = 1; i <= 22; i++) {
            callApi(Integer.toString(i), "", "gardenList", "list");
        }
    }

    public String callApi(String page, String cntntsNo, String api, String type) {
        try {
            StringBuilder urlBuilder = new StringBuilder("http://api.nongsaro.go.kr/service/garden/" + api); /*URL*/
            urlBuilder.append("?" + URLEncoder.encode("apiKey", "UTF-8") + secretKey); /*Service Key*/
            urlBuilder.append("&" + URLEncoder.encode("pageNo", "UTF-8") + "=" + page); /*Service Key*/
            urlBuilder.append("&" + URLEncoder.encode("cntntsNo", "UTF-8") + "=" + cntntsNo); /*Service Key*/

            URL url = new URL(urlBuilder.toString());
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();
            conn.disconnect();

            // String 형식의 xml
            String xml = sb.toString();

            if (type.equals("page")) {
                return getPage(xml);
            } else if (type.equals("list")) {
                plantList(xml);
            } else if (type.equals("detail")){
                return xml;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return "1";
    }

    public String getPage(String xml) {
        try {
            JAXBContext jaxbContext = JAXBContext.newInstance(XmlPlantResponse.class); // JAXB Context 생성
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();  // Unmarshaller Object 생성
            XmlPlantResponse apiResponse = (XmlPlantResponse) unmarshaller.unmarshal(new StringReader(xml)); // unmarshall 메서드 호출

            return apiResponse.getBody().getItems().getNumOfRows();

        } catch (JAXBException e) {
            e.printStackTrace();
        }
        return "1";
    }

    public void plantList(String xml) {
        try {
            JAXBContext jaxbContext = JAXBContext.newInstance(XmlPlantResponse.class); // JAXB Context 생성
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();  // Unmarshaller Object 생성
            XmlPlantResponse apiResponse = (XmlPlantResponse) unmarshaller.unmarshal(new StringReader(xml)); // unmarshall 메서드 호출

            for (XmlPlantResponse.Body.Items.Item item : apiResponse.getBody().getItems().getItem()) {
                savePlant(item.getCntntsNo(), item);
            }

        } catch (JAXBException e) {
            e.printStackTrace();
        }
    }

    public void savePlant(String cntntsNo, XmlPlantResponse.Body.Items.Item plant) {
        try {
            String detailXml = callApi("1", cntntsNo, "gardenDtl", "detail");


//            plant detail
            JAXBContext jaxbContext = JAXBContext.newInstance(XmlPlantDetailResponse.class); // JAXB Context 생성
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();  // Unmarshaller Object 생성
            XmlPlantDetailResponse apiResponse = (XmlPlantDetailResponse) unmarshaller.unmarshal(new StringReader(detailXml)); // unmarshall 메서드 호출
            XmlPlantDetailResponse.Body.Item detail = apiResponse.getBody().getItem();

            System.out.println(detail);

            String [] temperature = detail.getGrwhTpCodeNm().split("~");

            int temperature_min = Integer.parseInt(temperature[0]);
            int temperature_max = Integer.parseInt(temperature[1].substring(0, 2));

            String lights = detail.getLighttdemanddoCodeNm();
            int light_num = 0;

            if (lights.contains("낮은 광도")) {
                light_num += 1;
            }
            if(lights.contains("중간 광도")){
                light_num += 2;
            }
            if(lights.contains("높은 광도")) {
                light_num += 4;
            }

            int light_min = 300;
            int light_max = 800;

            if (light_num == 2){
                light_min = 800;
                light_max = 1500;
            } else if (light_num == 3){
                light_min = 300;
                light_max = 1500;
            } else if (light_num == 4){
                light_min = 1500;
                light_max = 10000;
            } else if (light_num == 5){
                light_max = 10000;
            } else if (light_num == 6){
                light_min = 800;
                light_max = 10000;
            } else if (light_num == 3){
                light_max = 10000;
            }

            int humidity_min = 0;
            int humidity_max = 100;

            String [] humidity = detail.getHdCodeNm().split(" ~ ");
            if (detail.getHdCodeNm().contains("이상")) {
                humidity_min = Integer.parseInt(humidity[0].substring(0, 2));
            } else if (detail.getHdCodeNm().contains("미만")){
                humidity_max = Integer.parseInt(humidity[0].substring(0, 2));
            } else if(!detail.getHdCodeNm().equals("")){
                humidity_min = Integer.parseInt(humidity[0]);
                humidity_max = Integer.parseInt(humidity[1].substring(0, 2));
            }
            String [] images = plant.getRtnThumbFileNm().split("\\|");

            PlantDictEntity plantDictEntity = PlantDictEntity.builder()
                    .plant_dict_id(Long.parseLong(cntntsNo))
                    .name(plant.getCntntsSj())
                    .manage_level(detail.getManagelevelCodeNm())
                    .tip(detail.getFncltyInfo())
                    .temperature_max(temperature_max)
                    .temperature_min(temperature_min)
                    .light_max(light_max)
                    .light_min(light_min)
                    .humidity_max(humidity_max)
                    .humidity_min(humidity_min)
                    .image_path(images[0])
                    .build();
            plantDictRepository.save(plantDictEntity);
        } catch (JAXBException e) {
            e.printStackTrace();
        }
    }
}
