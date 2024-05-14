import { serverInstance } from "../../../apis/client";
import { useMutation } from '@tanstack/react-query';

export const patchDiary = async (body) => {
  const response =  await serverInstance.post('/api/diary/update', body);
  return response.data;
};

const usePatchDiary = () => {
  const mutation = useMutation({
    mutationFn: patchDiary,
    onSuccess: (data) =>{
      console.log('요청에 성공했습니다.', data)
    }
  })
  return mutation;
};
export default usePatchDiary;