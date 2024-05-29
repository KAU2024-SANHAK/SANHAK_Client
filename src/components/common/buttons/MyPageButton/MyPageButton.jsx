import { useNavigate } from 'react-router-dom';
import * as S from './MyPageButton.style';

export default function MyPageButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/mypage');
  };

  return (
    <S.ClickedWrapper
      whileTap={{ scale: 0.9, backgroundColor: '#FFFFFF'}}
      transition={{ duration: 0.3 }}
    >
      <S.Wrapper onClick={handleClick}>
        <S.MyPageIcon />
        <S.MyPageButtonText>마이페이지</S.MyPageButtonText>
      </S.Wrapper>
    </S.ClickedWrapper>
  );
}
