import { serverInstance } from "../../../apis/client"
import { useMutation } from '@tanstack/react-query';

export const postCalendar = async (body) => {
    const response =  await serverInstance.post('/api/diary/list/calendar', body);
    return response.data;
}

export const usePostCalendar = () => {
    const mutation = useMutation({
        mutationFn: postCalendar,
        onSuccess: (data) => {
            console.log('요청에 성공했습니다.', data)
        }
    })
    return { mutation };
}