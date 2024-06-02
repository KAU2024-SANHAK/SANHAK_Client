import * as S from './SearchByEmotion.style';
import { useNavigate } from 'react-router-dom';
import PopUp from '../../components/PopUp/PopUp';
import BtnBack from '../../components/common/buttons/Back/BtnBack';
import SearchByEmotionPopUp from './SearchByEmotionPopUp/SearchByEmotionPopUp';

export default function SearchByEmotion(){
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate('/main');
  }

  return(
    <S.MyPageWrapper>
      <S.TopWrapper>
        <BtnBack handleClick={handleBackButton} />
        
        <S.HoneyBearWrapper>
          <S.HoneyBear height='30rem' />
        </S.HoneyBearWrapper>
      </S.TopWrapper>
      
      <S.PopUpWrapper>
        <PopUp name='감정별 일기조회'>
          <SearchByEmotionPopUp/>
        </PopUp>
      </S.PopUpWrapper>
        
    </S.MyPageWrapper>
  )
}
