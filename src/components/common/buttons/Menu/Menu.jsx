import { useState } from 'react';
import * as S from './Menu.style';
import useResetDiary from '../../../../hooks/diary/useResetDiaryAtom';
import { useNavigate } from 'react-router-dom';

export default function BtnMenu({ openModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { resetAdvice, resetFeeling } = useResetDiary();
  const navigate = useNavigate();

  const handleEdit = () => {
    resetAdvice();
    resetFeeling();
    navigate('/slowdiary');
  };

  return (
    <S.ButtonWrapper onClick={() => setMenuOpen(!menuOpen)}>
      <S.MenuBtn />
      {menuOpen && (
        <S.MenuWrapper>
          <S.EditBtn
            onClick={() => {
              handleEdit();
            }}
          >
            일기 수정하기
          </S.EditBtn>
          <S.DeleteBtn
            onClick={() => {
              openModal();
            }}
          >
            일기 삭제하기
          </S.DeleteBtn>
        </S.MenuWrapper>
      )}
    </S.ButtonWrapper>
  );
}
