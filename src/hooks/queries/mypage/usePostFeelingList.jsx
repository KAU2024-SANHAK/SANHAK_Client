import { seerverInstance } from "../../../apis/client"
import { useMutation } from "react-query";

export const postFeelingList = async (body) => {
    const response =  await seerverInstance.post('/api/diary/list/feeling', body);
    return response.data;
}

export const usePostFeelingList = () => { 
    const mutation = useMutation({
        mutationFn: postFeelingList,
        onSuccess: (data) => {
            console.log('요청에 성공했습니다.', data)
        }
    })
    return { mutation };
}