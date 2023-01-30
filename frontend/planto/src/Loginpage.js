import { KAKAO_AUTH_URL } from "./OAuth";

export default function Login(){

    function KakaoLogin(){
        window.location.href=KAKAO_AUTH_URL
    }
    
    return(
        <div>
            <button onClick={KakaoLogin}>
            <span>카카오계정 로그인</span>
            </button>
        </div>
    )
}