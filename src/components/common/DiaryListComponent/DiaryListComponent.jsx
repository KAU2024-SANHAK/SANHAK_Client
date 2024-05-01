import * as S from "./DiaryListComponent.style"
import DiaryView from "../../../pages/DiaryView/DiaryView"
import { useNavigate } from "react-router-dom"

export default function DiaryListComponent({ keys, feelingListId, feelingListTitle, feelingListDate }) {
    const navigate=useNavigate();
    const handleSearchButton=() =>{
        // recoil에서 조언 존재 여부 확인하기
        const [reply, setReply] = useRecoilState('replyState=>atom이름!!!')

        // recoil에서 감정 존재 여부 확인하기
        const [emotion, setEmotion] = useRecoilState('emotionState=>atom이름!!!')

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
                <S.SubmitBtnWrapper onClick={() => handleSearchButton()} >
                    <S.SubmitBtnTextWrapper>
                        조회하기
                    </S.SubmitBtnTextWrapper>
                </S.SubmitBtnWrapper>
            </S.TextWrapper>
            
        </S.DiaryListComponentWrapper>
    )
}

// 조회하기 버튼을 누르면 AI로부터 API를 받아오고, 받아온 값을 리코일에 저장해서 리코일에 저장한 값을 diaryview에 띄우게 된다.
