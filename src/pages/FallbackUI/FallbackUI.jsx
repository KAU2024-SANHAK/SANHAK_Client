import { IcError } from '../../assets/svg';
import * as S from './FallbackUI.style';

const FallbackUI = () => {
  return (
    <S.FallBackWrapper>
      <S.BoldText>로그인이 필요합니다.</S.BoldText>
      <S.LightText>
        <div>원하는 페이지로 이동하려면</div>
        로그인이 필요합니다.
      </S.LightText>
    </S.FallBackWrapper>
  );
};
export default FallbackUI;
