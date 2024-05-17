import { serverInstance } from "../../../apis/client";
import { useMutation } from '@tanstack/react-query';

export const deleteDiary = async (body) => {
  const response =  await serverInstance.delete('/api/diary/delete', body);
  return response.data;
};

const useDeleteDiary = () => {
  const mutation = useMutation({
    mutationFn: deleteDiary,
    onSuccess: (data) =>{
      console.log('요청에 성공했습니다.', data)
    }
  })
  return mutation;
};
export default useDeleteDiary;

