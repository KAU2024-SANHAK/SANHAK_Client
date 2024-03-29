import { authInstance } from "../../../../apis/client";
import { useEffect } from "react";

const params = new URL(document.URL).searchParams;
const code = params.get('code');

//백엔드 서버에 get 으로 넘겨주기
const useLogin= async () => {

    useEffect(()=>{ 

        if(code){
            try{
                const response = authInstance.get(
                //서버 주소에 쿼리 형식으로 인가코드 넣어 보내주기
                )
                
                //const userData = response.data.;
                
                localStorage.setItem();
                localStorage.setItem();
                localStorage.setItem();

            }catch(error){
                console.log(error)
            }
            
                
        }

    }, [])
}

export default useLogin