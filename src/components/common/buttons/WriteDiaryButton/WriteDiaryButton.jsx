import { useNavigate } from "react-router-dom"
import * as S from "./WriteDiaryButton.style"

export default function WriteDiaryButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/writediary')
    }

    return (
        <S.Wrapper onClick={handleClick}>
            <S.WriteDiaryButtonIcon/>
        </S.Wrapper>
    )
}