import { serverInstance } from "../../../../apis/client";
import { useMutation } from "react-query";

export const patchToken = async () => {
    const response =  await serverInstance.patch('/api/log-out',{});
    return response.data;
}

export const useLogout = () => {
    const mutation = useMutation({
        mutationFn: patchToken,
        onSuccess: (data) => {
            console.log(data.message);
            localStorage.removeItem('LOGIN_TOKEN');
            localStorage.removeItem('LOGIN_REFRESH_TOKEN');
            navigate('/')
        }
    })
    return { mutation }; 
};