import { instance } from "../../../apis/client"
import { useMutation } from 'react-query';

export const postDiary = async (body) => {
    const response =  await instance.post('/api/diary/content', body);
    return response.data;
}

export const usePostDiary = () => {
    const mutation = useMutation({
        mutationFn: postDiary,
        onSuccess: (data) =>{
            console.log('요청에 성공했습니다.', data)
        }
    })
    return { mutation };
}