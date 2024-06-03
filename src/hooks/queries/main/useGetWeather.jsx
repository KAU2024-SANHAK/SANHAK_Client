import { useSuspenseQuery } from '@tanstack/react-query';
import { aiInstance } from "../../../apis/client";

export const WEATHER_QUERY_KEY = ['weatherData'];

export const fetchWeather = async () => {
    const response = await aiInstance.get('/api/playlist/weather');
    return response.data;
};

const useGetWeather = ()=>{
    const { data, isLoading, isError } = useSuspenseQuery({
        queryKey: WEATHER_QUERY_KEY,
        queryFn: () => fetchWeather(),
    });
    return  { data, isLoading, isError };
};

export default useGetWeather;