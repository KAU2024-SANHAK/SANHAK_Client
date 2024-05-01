import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const useTestLogin= async () => {
    console.log('test 로그인을 실행합니다.')
    const navigate = useNavigate();
   // const params = new URL(document.URL).searchParams;
  //  const code = params.get('code');   

    const authTestInstance = axios.create({
        baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
        withCredentials: true,
        headers:{
            "Content-Type": 'application/json',
            Authorization: 'Bearer pLF2DvbE2TwMJeiagojcATGBCPft-272eHtA5uqAXo_xjQ-2jZAjl6oN4LAKPXOaAAABjzRF8orE017PSiBv1Q',
        }
    });
    
    const fetchAuth = ()=>{
        authTestInstance.get('api/kakao');
    }
  //  console.log(code);

    useEffect(()=>{ 

        
             fetchAuth().then((response) =>{
                const data = response.data

                const JWT = data.data;

                localStorage.setItem('LOGIN_TOKEN', JWT);
                //
                //localStorage.setItem('최초 로그인 여부 판단' 어쩌구 저쩌구)

            })
            
        

        //if 최초 로그인이면 온보딩으로 이동하기
        navigate('/')
        //else 메인 화면으로
    }, [])
}

export default useTestLogin