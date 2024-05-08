import { aiInstance } from '../../../apis/client';
import { useMutation } from 'react-query';
import axios from 'axios';

export const postKeywords = async (body) => {
  const memberId = localStorage.getItem('MemberId');
  const response = await aiInstance.post('/api/ai/diary/create', body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${memberId}`,
    },
  });
  return response.data;
};

//diaryKeywords로 recoil 정보 넘겨줌
export const usePostKeywords = () => {
  const mutation = useMutation({
    mutationFn: postKeywords,
    onSuccess: (data) => {
      console.log('요청에 성공했습니다.', data);
    },
  });
  return { mutation };
};
