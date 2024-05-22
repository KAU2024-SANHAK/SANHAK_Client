import { aiInstance } from '../../../apis/client';
import { useMutation } from '@tanstack/react-query';

export const postPlaylist = async (body) => {
  const response = await aiInstance.post('api/ai/diary/youtube',body);
  return response;
}

const usePostPlaylist = () => {
  const mutation = useMutation({
    mutationFn: postPlaylist,
    onSuccess: (data) => {
      console.log('요청에 성공했습니다.', data);
    }
  });
  return mutation;
}
export default usePostPlaylist;