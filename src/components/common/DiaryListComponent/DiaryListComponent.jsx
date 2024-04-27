import * as S from "./DiaryListComponent.style"
import BtnSubmit from "../buttons/Submit/BtnSubmit"
import DiaryView from "../../../pages/DiaryView/DiaryView"

export default function DiaryListComponent() {
    return (
        <S.DiaryListWrapper>
            <S.DiaryPhoto/>
            <S.TextWrapper>
                <S.TextTitle>
                    배가 아프지만 참은 날
                </S.TextTitle>
                <S.TextDate>
                    2024.03.25
                </S.TextDate>
            </S.TextWrapper>
            {/* <BtnSubmitWrapper> */}
                <BtnSubmit onClick={()=>{DiaryView}} height={100} $color={'var(--Red-Pink, #FF5959)'} />
            {/* </BtnSubmitWrapper> */}
        </S.DiaryListWrapper>
    )
}