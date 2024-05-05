import * as S from "./EmotionType.style";
import { useNavigate } from "react-router-dom";
// API 통신을 위한 import
// import { usePostFeelingList } from "../../../../hooks/queries/mypage/usePostFeelingList";

export default function BtnEmotionType({name, btnEnum}) {
    const navigate=useNavigate();
    const handleClick = () => {
        // 백에서 API 가져와서 Feeling btnEnum 넘기고 해당 Feeling에 해당하는 일기를 불러오는 페이지로 들어가기
        // const response = usePostFeelingList(btnEnum)
        // navigate(`/searchbyemotion/diarylist/response?=${response}`);

        navigate('/searchbyemotion/diarylist')
    }
    
    return (
        <S.EmotionTypeBtnWrapper onClick={handleClick}>
            <S.EmotionTypeBtnText>
                {name}
            </S.EmotionTypeBtnText>
        </S.EmotionTypeBtnWrapper>
    )
}