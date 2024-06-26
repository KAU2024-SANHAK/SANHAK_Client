import { serverInstance } from "../../../apis/client"
import { useMutation } from '@tanstack/react-query';

export const postAiImage = async (body) => {
  const response =  await serverInstance.post('/api/diary/image', body);
  return response.data;
}

const usePostAiImage = () => {
  const mutation = useMutation({
    mutationFn: postAiImage,
    onSuccess: (data) => {
      console.log('요청에 성공했습니다.', data)
    }
  })
  return mutation;
}
export default usePostAiImage;