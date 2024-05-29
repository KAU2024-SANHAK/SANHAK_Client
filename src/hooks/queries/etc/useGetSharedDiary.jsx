import { useSuspenseQuery } from '@tanstack/react-query';
import { cleanHeadServerInstance } from "../../../apis/client";

export const DIARY_QUERY_KEY = ['shredDiary'];

export const fetchDiary = async (id) => {
  console.log(id);
  const response = await cleanHeadServerInstance.get('/api/diary/share',{
    params: {
      diaryId: id,
    }
  });
  return response.data;
};

const useGetSharedDiary = (id)=>{
  const { data, isLoading, isError } = useSuspenseQuery({
    queryKey: DIARY_QUERY_KEY,
    queryFn: () => fetchDiary(id),
  });
  return  { data, isLoading, isError };
};

export default useGetSharedDiary;