import * as S from "./DiaryListComponent.style"
import DiaryView from "../../../pages/DiaryView/DiaryView"
import { useNavigate } from "react-router-dom"

export default function DiaryListComponent({ keys, feelingListId, feelingListTitle, feelingListDate }) {
    const navigate=useNavigate();
    const handleSearchButton=() =>{
        // recoil에서 조언 존재 여부 확인하기

        // recoil에서 감정 존재 여부 확인하기

        // recoil에서 key값에 따른 제목, 날짜, 글, 감정(빠른일기의 경우) 불러오기

        navigate('/diaryview')
    }

    return (
        <S.DiaryListComponentWrapper>
            <S.DiaryPhoto/>
            <S.TextWrapper>
                <S.TextTitle>
                    {feelingListTitle}
                </S.TextTitle>
                <S.TextDate>
                    {feelingListDate}
                </S.TextDate>
                <S.SubmitBtnWrapper onClick={() => handleSearchButton()}>
                    <S.SubmitBtnTextWrapper>
                        조회하기
                    </S.SubmitBtnTextWrapper>
                </S.SubmitBtnWrapper>
            </S.TextWrapper>
            
        </S.DiaryListComponentWrapper>
    )
}