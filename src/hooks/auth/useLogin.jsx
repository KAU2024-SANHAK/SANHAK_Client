import { useNavigate } from "react-router-dom";
import { authInstance } from "../../apis/client";
import { useEffect } from "react";

const useLogin= async () => {
    const navigate = useNavigate();
    const params = new URL(document.URL).searchParams;
    const code = params.get('code');   
    
    const fetchAuth = ()=>{
        authInstance.get(`/api/ouath/kakao/login?code=${code}`)
    }

    useEffect(()=>{ 

        if(code){
            fetchAuth().then((response) =>{
                const data = response.data

                const JWT = data.data.memberToken.accessToken;
                const RefreshToken = data.data.memberToken.refreshToken;

                localStorage.setItem('LOGIN_TOKEN', JWT);
                localStorage.setItem('LOGIN_REFRESHTOKEN', RefreshToken);
                //
                //localStorage.setItem('최초 로그인 여부 판단' 어쩌구 저쩌구)

            })
            
        }

        //if 최초 로그인이면 온보딩으로 이동하기
        navigate('/')
        //else 메인 화면으로
    }, [])
}

export default useLogin