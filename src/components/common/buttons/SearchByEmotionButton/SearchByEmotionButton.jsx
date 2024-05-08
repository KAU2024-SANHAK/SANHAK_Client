import { useNavigate } from "react-router-dom"
import * as S from "./SearchByEmotionButton.style"

export default function SearchByEmotionButton(props) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/searchbyemotion')
    }

    return (
        <S.Wrapper onClick={handleClick}>
            <S.SearchByEmotionIconWrapper>
                <S.SearchByEmotionButtonIcon/>
            </S.SearchByEmotionIconWrapper>
            <S.SearchByEmotionButtonText>
                감정별 <br/>
                일기조회
            </S.SearchByEmotionButtonText>
        </S.Wrapper>
    )
}