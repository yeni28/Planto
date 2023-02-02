import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
import {CLIENT_ID , REDIRECT_URI} from "./OAuth";
import axios from 'axios'
function KakaoLogin() {
    // const navigate = useNavigate()
    
    // TOKEN저장
    
    useEffect(() => {
        (async () => {
        const PARAMS = new URL(document.location).searchParams;
        const KAKAO_CODE = PARAMS.get('code');

        await axios({
            url: 'https://kauth.kakao.com/oauth/token',
            method: 'post',
            data: {
                grant_type: 'authorization_code', 
                redirect_uri: REDIRECT_URI,
                code: KAKAO_CODE,
                client_id: CLIENT_ID
            }
        })
        .then((res) =>{
            console.log(res)
            console.log(KAKAO_CODE)

            
        })
        .catch((err) => {
            console.log(err)
        })

        // const token = window.localStorage.getItem('token');
        try {
            // 차후 백에서 api받아서 수정
            await axios.post('/api/post', KAKAO_CODE,{
                headers:{
                    Authorization:KAKAO_CODE,
                },
            }).then((res) => {
                console.log(res);
            });
        } catch(e){
            console.error(e)
        }
    })();
    }, [])


    return (
    <div>KakaoLogin</div>
  )
}

export default KakaoLogin