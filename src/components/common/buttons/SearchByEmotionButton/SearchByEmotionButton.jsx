import { useNavigate } from "react-router-dom"
import * as S from "./SearchByEmotionButton.style"

export default function SearchByEmotionButton(props) {
    const navigate = useNavigate();
    reutrn (
        <S.Wrapper onClick={navigate("/searchbyemotion")}> // SearchByEmotion 함수를 불러오도록 함
            감정별로 일기조회
        </S.Wrapper>
    )
}