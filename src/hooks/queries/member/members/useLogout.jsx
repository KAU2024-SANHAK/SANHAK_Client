import { serverInstance } from "../../../../apis/client";
import { useMutation } from "react-query";

export const patchToken = async (body) => {
    const response =  await serverInstance.post('/api/log-out', body);
    return response.data;
}

const useLogout = async()=>{
    const mutation = useMutation({
        mutationFn: patchToken(),
        onSuccess: (data) => {
            console.log(data.message);
        }
    })
    console.log('logout');
};
export default useLogout;