import axios from "axios";
import { useEffect } from "react";

const params = new URL(document.URL).searchParams;
const code = params.get('code');
//백엔드 서버에 post로 넘겨주기
const useLogin= () => {
    useEffect(()=>{ 
        if(code){
            console.log(code)
        }

    }, [])
}

export default useLogin