import * as S from './MyPage.style'
import PopUp from '../../components/PopUp/PopUp'


export default function MyPage(){
    return(
        <S.MyPageWrapper>
            <S.HoneyBearWrapper>
                <S.HoneyBear height='24.65rem'/>
            </S.HoneyBearWrapper>
            <PopUp>
                마이페이지
            </PopUp>
        </S.MyPageWrapper>
    )
}
