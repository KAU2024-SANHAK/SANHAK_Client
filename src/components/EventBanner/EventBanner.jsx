import { useNavigate } from 'react-router-dom';
import * as S from './EventBanner.style';

function EventBanner() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    alert('이동');
  };

  return(
    <S.EventBannerWrapper onClick={() => handleNavigate()}>
      <S.EventBannerText>
        허니어리에 <br />
        당신의 추석을 기록해보세요!
      </S.EventBannerText>
      <S.EventBannerText>
        &gt;
      </S.EventBannerText>
    </S.EventBannerWrapper>
  );
}

export default EventBanner;