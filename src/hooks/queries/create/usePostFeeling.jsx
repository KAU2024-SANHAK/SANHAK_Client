import { aiInstance } from "../../../apis/client"
import { useMutation } from '@tanstack/react-query';

export const postFeeling = async (body) => {
    const response =  await aiInstance.post('/api/ai/diary/feeling', body);
    return response.data;
}

export const usePostFeeling = () => {
    const mutation = useMutation({
        mutationFn: postFeeling,
        onSuccess: (data) => {
            console.log('요청에 성공했습니다.', data)
        }
    })   
    return { mutation };
}