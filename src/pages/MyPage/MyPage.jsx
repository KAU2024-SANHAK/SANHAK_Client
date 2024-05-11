import * as S from './MyPage.style'
import { useNavigate } from 'react-router-dom'
import PopUp from '../../components/PopUp/PopUp'
import BtnBack from '../../components/common/buttons/Back/BtnBack'
import MyPagePopUp from './MyPagePopUp/MyPagePopUp'

export default function MyPage(){
    const navigate=useNavigate();
    const handleBackButton=()=>{
        navigate('/main');
    }

    return(
        <S.MyPageWrapper>
            <S.BackButtonWrapper>
                <BtnBack handleClick={handleBackButton}/>
            </S.BackButtonWrapper>
            
            <S.HoneyBearWrapper>
                <S.HoneyBear height='30rem'/>
            </S.HoneyBearWrapper>

            <PopUp name='마이페이지'>
                <MyPagePopUp/>
            </PopUp>
        </S.MyPageWrapper>
    )
}
