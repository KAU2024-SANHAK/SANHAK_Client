import { aiInstance } from "../../../apis/client"
import { useSuspenseQuery } from '@tanstack/react-query';

export const SLOW_DIARY_ID_KEY = ['slowDiaryId']

export const postAdvice = async (body) => {
    const response =  await aiInstance.post('/api/ai/advice/content', body);
    return response.data;
}

export const usePostFeeling = ({diaryId}) => {
    const {data} = useSuspenseQuery({
        queryKey: DIARY_ADVICE_KEY,
        queryFn: () => {postAdvice(diaryId)}
    });
    
    return data;
}