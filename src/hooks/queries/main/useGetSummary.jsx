import { useSuspenseQuery } from '@tanstack/react-query';
import { aiInstance } from "../../../apis/client";

export const SUMMARY_QUERY_KEY = ['summaryData'];

export const fetchSummary = ()=>{
    aiInstance.get('/api/ai/diary/summary');
};

export const useGetSummary = ()=>{
    const {data} = useSuspenseQuery({
        queryKey: SUMMARY_QUERY_KEY,
        queryfn: () => fetchSummary(),
    });
    return data;
};