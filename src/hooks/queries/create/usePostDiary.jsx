import { instance } from "../../../apis/client"
import { useSuspenseQuery } from '@tanstack/react-query';

export const DIARY_KEY = ['diary']

export const postDiary = async (body) => {
    const response =  await instance.post('/api/diary/content', body);
    return response.data;
}

export const usePostDiary = ({diaryId}) => {
    const {data} = useSuspenseQuery({
        queryKey: DIARY_KEY,
        queryFn: () => {postDiary(diaryId)}
    });
    
    return data;
}