import { useSuspenseQuery } from '@tanstack/react-query';
import { instance } from "../../../apis/client"

export const SLOW_DIARY_ID_KEY = ['slowDiaryId']

export const postSlowDiary = async (body) => {
    const response =  await instance.post('/api/diary/create/slow', body);
    return response.data;
}

export const usePostSlowdiary = ({slowDiaryData}) => {
    const {data} = useSuspenseQuery({
        queryKey: SLOW_DIARY_ID_KEY,
        queryFn: () => {postSlowDiary(slowDiaryData)}
    });
    
    return data;
}