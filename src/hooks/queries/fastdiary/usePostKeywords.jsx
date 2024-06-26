import { aiInstance, getMemberId } from '../../../apis/client';
import { useMutation } from '@tanstack/react-query';


export const postKeywords = async (body) => {
 // const memberId = localStorage.getItem('MemberId');
  const response = await aiInstance.post('/api/ai/diary/create', body,{
    headers: {
      Authorization: `${getMemberId()}`,
    }
  });
  return response.data;
};

export const usePostKeywords = () => {
  const mutation = useMutation({
    mutationFn: postKeywords,
    onSuccess: (data) => {
      console.log('요청에 성공했습니다.', data);
    },
  });
  return { mutation };
};
