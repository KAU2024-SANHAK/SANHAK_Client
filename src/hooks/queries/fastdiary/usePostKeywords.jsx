import { aiInstance } from "../../../apis/client";
import { useMutation } from "react-query";
import axios from "axios";


export const postKeywords = async (body) => {
    //const response = axios.post('/ai/diary/create', body);
    const response = aiInstance.post('/api/ai/diary/create', body)
    return response.data;
}

//diaryKeywords로 recoil 정보 넘겨줌
export const usePostKeywords = () => {
    const mutation  = useMutation({
        mutationFn: postKeywords,
        onSuccess: (data) => {
            console.log('요청에 성공했습니다.', data)
        }
    })
    return { mutation };
}