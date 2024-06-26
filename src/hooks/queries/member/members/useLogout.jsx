import { serverInstance } from '../../../../apis/client';
import { useMutation } from '@tanstack/react-query';

export const patchToken = async () => {
  const response = await serverInstance.patch('/api/log-out', {});
  return response.data;
};

const useLogout = () => {
  const mutation = useMutation({
    mutationFn: patchToken,
    onSuccess: (data) => {
      console.log(data.message);
    },
  });
  return mutation;
};
export default useLogout;