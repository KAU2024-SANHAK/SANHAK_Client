import { serverInstance } from "../../../../apis/client";
import { useMutation } from "react-query";

export const patchToken = async () => {
    const response =  await serverInstance.patch('/api/log-out');
    return response.data;
}

const useLogout = async()=>{
    const mutation = useMutation({
        mutationFn: patchToken(),
        onSuccess: (data) => {
            console.log(data.message);
        }
    })
};
export default useLogout;