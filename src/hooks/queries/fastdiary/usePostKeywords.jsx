import { aiInstance } from "../../../apis/client";
import { useSuspenseQuery } from '@tanstack/react-query';

export const DIARY_KEYWORDS_KEY = ['diaryKeywords']

export const postKeywords = async (body) => {
    const response = aiInstance.post('/api/ai/diary/create', body);
    return response.data;
}

//diaryKeywords로 recoil 정보 넘겨줌
export const usePostKeywords = ({diaryKeywords}) => {
    const {data} = useSuspenseQuery({
        queryKey: DIARY_KEYWORDS_KEY,
        queryFn: () => {postKeywords(diaryKeywords)}
    });

    return data;
}