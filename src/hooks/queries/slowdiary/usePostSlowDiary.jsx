import { instance } from "../../../apis/client"
import { useMutation } from "react-query"

export const postSlowDiary = async (body) => {
    const response =  await instance.post('/api/diary/create/slow', body);
    return response.data;
}

export const usePostSlowdiary = () => {
    const mutation = useMutation({
        mutationFn: postSlowDiary,
        onSuccess: (data)=>{
            return data;
        }
    })
    return {mutation};
}