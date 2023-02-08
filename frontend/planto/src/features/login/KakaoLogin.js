import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import {CLIENT_ID , REDIRECT_URI} from "./OAuth";
import axios from 'axios'
function KakaoLogin() {
    const navigate = useNavigate()
    
    // TOKEN저장
    
    useEffect(() => {
        (async () => {
        const PARAMS = new URL(document.location).searchParams;
        const KAKAO_CODE = PARAMS.get('code');
    
        console.log({KAKAO_CODE})
        const backHost = `http://localhost:8080/api/v1/oauth/token?code=${KAKAO_CODE}`
        
        await axios({   
            url: backHost,
            method: 'GET',
        })
        .then((res) =>{
            console.log(res)
            const token = res.headers.authorization
            window.localStorage.setItem('token', token);
            // 로컬스토리지에 토큰이 있으면 메인페이지로 이동
            // 없으면 로그인 페이지로 리다이렉트
            // if (token) {
            //     navigate('/main/none')
            // } else {
            //     navigate('/')
            // }
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