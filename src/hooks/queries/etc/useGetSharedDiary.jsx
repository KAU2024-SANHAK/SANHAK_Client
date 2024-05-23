import { useSuspenseQuery } from '@tanstack/react-query';
import { cleanHeadServerInstance } from "../../../apis/client";

export const DIARY_QUERY_KEY = ['shredDiary'];

export const fetchDiary = async (id) => {
    const response = await cleanHeadServerInstance.get('/api/diary/share',{
      data: {
        diaryId: id,
      }
    });
    return response.data;
};

const useGetSharedDiary = ()=>{
    const { data, isLoading, isError } = useSuspenseQuery({
        queryKey: DIARY_QUERY_KEY,
        queryFn: () => fetchDiary(),
    });
    return  { data, isLoading, isError };
};

export default useGetSharedDiary;