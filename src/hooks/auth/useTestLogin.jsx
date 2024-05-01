import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const useLogin= async () => {
    console.log('test 로그인을 실행합니다.')
    const navigate = useNavigate();
    const params = new URL(document.URL).searchParams;
    const code = params.get('code');   

    const authInstance = axios.create({
        baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
        withCredentials: true,
        headers:{Authorization: 
        ''
        }
    });
    
    const fetchAuth = ()=>{
        authInstance.get(`/api/kakao/?code=${code}`)
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