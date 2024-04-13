import BtnSetDiaryModal from '../common/buttons/SetDiaryModal/BtnSetDiaryModal'
import * as S from './PopUp.style'

export default function PopUp({children}){
    return(
        <S.PopUpWrapper>
            <S.PopUpTitle>
                {children}
            </S.PopUpTitle>
            <S.DiaryTypeWrapper>
                <p>일기 작성 스타일</p>
                <BtnSetDiaryModal/>
            </S.DiaryTypeWrapper>
        </S.PopUpWrapper>
    )
}