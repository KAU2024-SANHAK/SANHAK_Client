import * as S from "./DiaryListComponent.style"
import DiaryView from "../../../pages/DiaryView/DiaryView"
import { useNavigate } from "react-router-dom"

export default function DiaryListComponent() {
    const navigate=useNavigate();
    const handleSearchButton=() =>{
        navigate('/diaryview')
    }

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
                <S.SubmitBtnWrapper onClick={() => handleSearchButton()}>
                    <S.SubmitBtnTextWrapper>
                        조회하기
                    </S.SubmitBtnTextWrapper>
                </S.SubmitBtnWrapper>
            </S.TextWrapper>
            
        </S.DiaryListWrapper>
    )
}