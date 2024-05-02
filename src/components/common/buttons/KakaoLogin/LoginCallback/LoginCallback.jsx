import { useEffect, useState } from 'react';
import useGetLoginToken from '../../../../../hooks/queries/member/members/useGetLoginToken';
import usePostLoginToken from '../../../../../hooks/queries/member/members/usePostLoginToken';
import Loading from '../../../../../pages/Loading/Loading';

function LoginCallback() {
  const [loginToken, setLoginToken] = useState('');

  const handleLoginToken = (token) => {
    setLoginToken(token);
  };

  const getMutation = useGetLoginToken({ handleLoginToken });
  const postMutation = usePostLoginToken();

  useEffect(() => {
    loginToken === '' ? getMutation.mutate() : postMutation.mutate(loginToken);
  }, [loginToken]);

  return <Loading />;
}

export default LoginCallback;
