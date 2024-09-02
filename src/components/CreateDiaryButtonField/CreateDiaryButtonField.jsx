import * as S from './CreateDiaryButtonFiedl.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WriteDiaryButton from '../common/buttons/WriteDiaryButton/WriteDiaryButton';
import BtnFastDiary from '../common/buttons/DiaryType/BtnFastDiary';
import BtnSlowDiary from '../common/buttons/DiaryType/BtnSlowDiary';

function CreateDiaryButtonField() {
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  const onUpdate = () => {
    setIsClick(!isClick);
  };
  const handleFastDiary = () => {
    navigate('/fastdiary');
  };
  const handleSlowDiary = () => {
    navigate('/slowdiary');
  };

  return(
    <S.ButtonMotionWrapper
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      isClick={isClick}
    >
      {
        isClick && (
          <>
            <S.CreateButtonField>
              <S.ButtonText>
                직접 일기 쓰기
              </S.ButtonText>
              <BtnSlowDiary onClick={handleSlowDiary}/>
            </S.CreateButtonField>

            <S.CreateButtonField>
              <S.ButtonText>
                키워드로 빠르게 쓰기
              </S.ButtonText>
              <BtnFastDiary onClick={handleFastDiary}/>
            </S.CreateButtonField>
          </>
        )
      }
      <WriteDiaryButton isClick={isClick} onUpdate={onUpdate}/>
    </S.ButtonMotionWrapper>
  );
}
export default CreateDiaryButtonField;