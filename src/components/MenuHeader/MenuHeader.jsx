import * as S from './MenuHeader.style';
import BtnSearch from './../common/buttons/Search/BtnSearch';
import BtnCalendar from './../common/buttons/Calendar/BtnCalendar';
import BtnMyPage from './../common/buttons/MyPage/BtnMyPage';
import { useNavigate, useLocation } from 'react-router-dom';
import BtnHomeIcon from './../common/buttons/Home/BtnHomeIcon/BtnHomeIcon';

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
  const handleMain = () => {
    navigate('/main');
  };
  const getSegment = () => {
    const location = useLocation();
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    const firstSegment = segments[0];
    
    return firstSegment;
  }

  const segment = getSegment();
  
  return(
    <S.MenuHeaderWrapper>
      <BtnSearch onClick={handleSearch}/>
      {
        segment === 'main'
          ? 
            <BtnCalendar onClick={handleCalendar} />
          :
            <BtnHomeIcon onClick={handleMain} />
      }
      <BtnMyPage onClick={handleMyPage} />
    </S.MenuHeaderWrapper>
  );
}
export default MenuHeader;