import * as S from "./DiaryListComponent.style"
import { useNavigate } from "react-router-dom"
// import { usePostDiary } from "../../../hooks/queries/etc/usePostDiary";
import { diaryContentState } from "../../../recoil/atoms";

// TEST: 테스트파일 불러오기
import { diaryContent } from "../../../utils/diaryContent";

export default function DiaryListComponent({ keys, feelingListId, feelingListTitle, feelingListDate }) {
    const navigate=useNavigate();

    const setDiaryContent = (content) => {
        diaryContentState.set(content);
    }

    const handleSearchButton=() =>{
        // API 연결_back에 diaryId request
        // const responseObject = usePostDiary(diaryId={feelingListId})

        // API 연결_back에 diaryId response 핸들링_리코일 atom에 저장
        // const { status, data } = responseObject;
        // if (status === 201) {
        //     setDiaryContent(data);
        // }

        // TEST: utils/diaryContent.js 가져와서 리코일 atom에 저장
        const { status, data } = diaryContent;
        if (status === 201) {
            setDiaryContent(data);
        }

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
