import { instance } from "../../../apis/client"
import { useSuspenseQuery } from '@tanstack/react-query';

export const FEELING_LIST_KEY = ['diary']

export const postFeelingList = async (body) => {
    const response =  await instance.post('/api/diary/list/feeling', body);
    return response.data;
}

export const usePostFeelingList = ({feeling}) => {
    const {data} = useSuspenseQuery({
        queryKey: FEELING_LIST_KEY,
        queryFn: () => {postFeelingList(feeling)}
    });
    
    return data;
}