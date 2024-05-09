/*import { useSuspenseQuery } from '@tanstack/react-query';
import { aiInstance } from "../../../apis/client";

export const SUMMARY_QUERY_KEY = ['summaryData'];

export const fetchSummary = async () => {
    const response = await aiInstance.get('/api/ai/diary/summary');
    return response.data;
};

const useGetSummary = ()=>{
    const { data, isLoading, isError } = useSuspenseQuery({
        queryKey: SUMMARY_QUERY_KEY,
        queryFn: () => fetchSummary(),
    });
    return  { data, isLoading, isError };
};

export default useGetSummary;*/

import { aiInstance } from '../../../apis/client';
import { useMutation } from '@tanstack/react-query';

export const postSummary = async (body) => {
 // const memberId = localStorage.getItem('MemberId');
  const response = await aiInstance.post('/api/ai/diary/summary', body);
  return response.data;
};
const usePostSummary = () => {
  const mutation = useMutation({
    mutationFn: postSummary,
    onSuccess: (data) => {
      console.log('요청에 성공했습니다.', data);
    },
  });
  return mutation;
};
export default usePostSummary;