import { serverInstance } from "../../../apis/client"
import { useMutation } from '@tanstack/react-query';

export const postSlowDiary = async (body) => {
    const response =  await serverInstance.post('/api/diary/create/slow', body);
    return response.data;
}

export const usePostSlowDiary = () => {
    const mutation = useMutation({
        mutationFn: postSlowDiary,
        onSuccess: (data)=>{
            console.log('요청에 성공했습니다.', data)
        }
    })
    return {mutation};
}
export default usePostSlowDiary;