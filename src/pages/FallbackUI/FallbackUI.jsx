import { IcError } from '../../assets/svg';
import * as S from './FallbackUI.style';

function FallbackUI() {
  return (
    <S.FallbackUIWrapper>
      <IcError style={{ width: '10rem', height: '10rem' }} />
      <S.BoldText>에러가 발생했습니다.</S.BoldText>
      <S.LightText>
        <div>인터넷 상황을 확인해주시고,</div>
        계속 에러가 발생할 시 새로고침을 해주세요.
      </S.LightText>
    </S.FallbackUIWrapper>
  );
}
export default FallbackUI;
