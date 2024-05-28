import { aiInstance } from '../../../apis/client';
import { useMutation } from '@tanstack/react-query';

export const postAdvice = async (body) => {
  const response =  await aiInstance.post('/api/ai/advice/content', body);
  return response.data;
}

const usePostAdvice = () => {
  const mutation = useMutation({
    mutationFn: postAdvice,
    onSuccess: (data) => {
      console.log('요청에 성공했습니다.', data)
    }
  })
  return mutation;
}
export default usePostAdvice;