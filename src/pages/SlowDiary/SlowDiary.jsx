import * as S from './SlowDiary.style';
import { useModal } from '../../hooks/common/useModal';
import { useNavigate } from 'react-router-dom';
import BtnHome from '../../components/common/buttons/Home/BtnHome';
import OptionModal from '../../components/Modal/OptionModal';
import DiaryForm from './DiaryForm/DiaryForm';

function SlowDiary(){
  const date = new Date();
  const today = date.getDate();

  const navigate = useNavigate();
  const [isOpen, openModal, closeModal] = useModal();

  const handleGoMain=()=>{
    navigate('/main');
  };

  return(
    <S.SlowDiaryPageWrapper  $isEven = {today%2}>
      {isOpen && 
        <OptionModal 
        closeModal={closeModal} 
        handleOption={handleGoMain}
        optionText='홈으로 돌아가기'
        closeText='이어서 기록하기'
        >
          홈으로 되돌아가시겠습니까?
          <br />
          되돌아가면 글은 초기화됩니다.
        </OptionModal>  
      }
      <S.SlowDiaryHeader>
        <BtnHome
          onClick={() => {
            openModal()
          }} 
        />       
        <S.Caption>
          사진을 첨부하려면 + 버튼을 누르세요.
        </S.Caption>
      </S.SlowDiaryHeader>

      <DiaryForm />
    </S.SlowDiaryPageWrapper>
  );   
}
export default SlowDiary;