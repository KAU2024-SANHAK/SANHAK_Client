import axios from 'axios';

import { REDIRECT_URI, REST_API_KEY } from '../../utils/login';

export const getLoginToken = async () => {
  const AUTHORIZE_CODE = new URL(window.location.href).searchParams.get('code');
  const GRANT_TYPE = 'authorization_code';
  const POST_URL = `grant_type=${GRANT_TYPE}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`;

  if (AUTHORIZE_CODE) {
    const response = await axios.post(`https://kauth.kakao.com/oauth/token?${POST_URL}`, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    return response.data;
  }
};
