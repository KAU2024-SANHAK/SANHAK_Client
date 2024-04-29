import { useSuspenseQuery } from '@tanstack/react-query';
import { aiInstance } from "../../../apis/client";

export const SUMMARY_QUERY_KEY = ['summaryData'];

export const fetchSummary = async()=>{
    const response = await aiInstance.get('/api/ai/diary/summary');
    return response.data;
};

export const useGetSummary = ()=>{
    const {data} = useSuspenseQuery({
        queryKey: SUMMARY_QUERY_KEY,
        queryfn: () => fetchSummary(),
    });
    return data;
};