import * as S from './MenuHeader.style';
import BtnSearch from './../common/buttons/Search/BtnSearch';
import BtnCalendar from './../common/buttons/Calendar/BtnCalendar';
import BtnMyPage from './../common/buttons/MyPage/BtnMyPage';
import { useNavigate, useLocation } from 'react-router-dom';
import BtnHomeIcon from './../common/buttons/Home/BtnHomeIcon/BtnHomeIcon';

function MenuHeader() {
  const navigate = useNavigate();

  const getSegment = () => {
    const location = useLocation();
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    const firstSegment = segments[0];
    
    return firstSegment;
  }

  const segment = getSegment();
  const menuItems = [
    {
      id: 'search',
      component: BtnSearch,
      onClick: () => {alert('검색');},
    },
    {
      id: 'calendar',
      component: BtnCalendar,
      onClick: () => {navigate('/calendar');},
      condition: segment === 'main',
    },
    {
      id: 'main',
      component: BtnHomeIcon,
      onClick: () => {navigate('/main');},
      condition: segment !=='main',
    },
    {
      id: 'myPage',
      component: BtnMyPage,
      onClick: () => {navigate('/myPage');},
    },
  ];
  
  return(
    <S.MenuHeaderWrapper>
      {
        menuItems.filter(menu => menu.condition !== false)
        .map((menuItem) => (
          <menuItem.component 
            key={menuItem.id} 
            onClick={menuItem.onClick} 
          />
        ))
      }
    </S.MenuHeaderWrapper>
  );
}
export default MenuHeader;