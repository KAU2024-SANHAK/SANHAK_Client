import { authInstance } from "../../../../apis/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const params = new URL(document.URL).searchParams;
const code = params.get('code');

//백엔드 서버에 get 으로 넘겨주기
const useLogin= async () => {
    const navigate = useNavigate();

    useEffect(()=>{ 
1
        if(code){
            try{
                const response = authInstance.get(
                //서버 주소에 쿼리형식으로 인가코드 넣어
                `${code}`
                )
                
                //const userData = response.data.;
            

            }catch(error){
                console.log(error)
            }
            
            localStorage.setItem('id', true);
        }

        //시작 페이지로 이동하기
        navigate('/')
    }, [])
}

export default useLogin