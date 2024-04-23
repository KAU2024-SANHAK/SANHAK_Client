import { instance } from "../../../apis/client"
import { useSuspenseQuery } from '@tanstack/react-query';

export const MONTHLY_LIST_KEY = ['monthList']

export const postCalendar = async (body) => {
    const response =  await instance.post('/api/diary/list/calendar', body);
    return response.data;
}

export const usePostCalendar = ({currentDate}) => {
    const {data} = useSuspenseQuery({
        queryKey: MONTHLY_LIST_KEY,
        queryFn: () => {postCalendar(currentDate)}
    });
    
    return data;
}