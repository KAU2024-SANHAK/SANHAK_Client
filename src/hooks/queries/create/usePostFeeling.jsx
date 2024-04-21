import { aiInstance } from "../../../apis/client"
import { useSuspenseQuery } from '@tanstack/react-query';

export const SLOW_DIARY_ID_KEY = ['slowDiaryId']

export const postFeeling = async (body) => {
    const response =  await aiInstance.post('/api/ai/diary/feeling', body);
    return response.data;
}

export const usePostFeeling = ({diaryId}) => {
    const {data} = useSuspenseQuery({
        queryKey: DIARY_FEELING_KEY,
        queryFn: () => {postFeeling(diaryId)}
    });
    
    return data;
}