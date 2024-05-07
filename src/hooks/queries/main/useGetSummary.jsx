import { useSuspenseQuery } from '@tanstack/react-query';
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

export default useGetSummary;