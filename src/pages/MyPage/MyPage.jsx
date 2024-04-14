import * as S from './MyPage.style'
import PopUp from '../../components/PopUp/PopUp'
import BtnBack from '../../components/common/buttons/Back/BtnBack'


export default function MyPage(){
    return(
        <S.MyPageWrapper>
            <S.BackButtonWrapper>
                <BtnBack/>
            </S.BackButtonWrapper>
            
            <S.HoneyBearWrapper>
                <S.HoneyBear height='30rem'/>
            </S.HoneyBearWrapper>

            <PopUp>
                마이페이지
            </PopUp>
        </S.MyPageWrapper>
    )
}
