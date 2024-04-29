import { seerverInstance } from "../../../apis/client"
import { useMutation } from "react-query";

export const postCalendar = async (body) => {
    const response =  await seerverInstance.post('/api/diary/list/calendar', body);
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