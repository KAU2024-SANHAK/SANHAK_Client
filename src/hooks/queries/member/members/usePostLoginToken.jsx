import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postLoginToken } from '../../../../apis/kakaoapi/postLoginToken';

const usePostLoginToken = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (token) => {
      return await postLoginToken(token);
    },
    onSuccess: (data) => {
      const { tokenDto } = data;
      console.log(data);
      console.log(tokenDto);
      if (tokenDto !== null) {
        window.localStorage.setItem('LOGIN_TOKEN', tokenDto.accessToken);
        window.localStorage.setItem('LOGIN_REFRESH_TOKEN', tokenDto.refreshToken);
        console.log('로그인 성공!');
        navigate('/');
      }
    },
  });
  return mutation;
};

export default usePostLoginToken;
