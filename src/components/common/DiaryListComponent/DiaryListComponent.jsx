import * as S from "./DiaryListComponent.style"
import { useNavigate } from "react-router-dom"
import { usePostDiary } from "../../../hooks/queries/etc/usePostDiary";

export default function DiaryListComponent({ keys, feelingListId, feelingListTitle, feelingListDate }) {
    const navigate=useNavigate();

    const handleSearchButton=() =>{
        const responseObject = usePostDiary(diaryId={feelingListId})
        navigate('/diaryview')
    }

    return (
        <S.DiaryListComponentWrapper>
            <S.Image/>
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
