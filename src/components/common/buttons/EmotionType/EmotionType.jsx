import * as S from "./EmotionType.style";
import { useNavigate } from "react-router-dom";

export default function EmotionType({name}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/searchbyemotion/diarylist`);
    }
    
    return (
        <S.EmotionTypeBtnWrapper onClick={handleClick}>
            <S.EmotionTypeBtnText>
                {name}
            </S.EmotionTypeBtnText>
        </S.EmotionTypeBtnWrapper>
    )
}