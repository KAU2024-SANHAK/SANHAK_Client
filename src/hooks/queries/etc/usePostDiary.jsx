import { serverInstance } from "../../../apis/client"
import { useMutation } from '@tanstack/react-query';

export const postDiary = async (body) => {
  const response =  await serverInstance.post('/api/diary/content', body);
  return response.data;
};

const usePostDiary = () => {
  const mutation = useMutation({
    mutationFn: postDiary,
    onSuccess: (data) =>{
      console.log('요청에 성공했습니다.', data)
    }
  })
  return mutation;
};
export default usePostDiary;