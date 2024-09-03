import * as S from './MenuHeader.style';
import BtnSearch from './../common/buttons/Search/BtnSearch';
import BtnCalendar from './../common/buttons/Calendar/BtnCalendar';
import BtnMyPage from './../common/buttons/MyPage/BtnMyPage';
import { useNavigate } from 'react-router-dom';

function MenuHeader() {
  const navigate = useNavigate();

  const handleSearch = () => {
    alert('삐용');
    //라우트 설정 완료되면 주석 해젷 사용하심 될 것 같습니다 !
    //navigate('/search');
  };
  const handleCalendar = () => {
    navigate('/calendar');
  };
  const handleMyPage = () => {
    navigate('/myPage');
  };
  
  return(
    <S.MenuHeaderWrapper>
      <BtnSearch onClick={handleSearch}/>
      <BtnCalendar onClick={handleCalendar} />
      <BtnMyPage onClick={handleMyPage} />
    </S.MenuHeaderWrapper>
  );
}
export default MenuHeader;