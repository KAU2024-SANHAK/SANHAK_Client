import { useMutation } from '@tanstack/react-query';
import { getLoginToken } from '../../../../apis/kakaoapi/getLoginToken';

const useGetLoginToken = (props) => {
  const { handleLoginToken } = props;

  const mutation = useMutation({
    mutationFn: async () => {
      return await getLoginToken();
    },
    onSuccess: (data) => {
      handleLoginToken(data.access_token);
    },
  });
  return mutation;
};

export default useGetLoginToken;
