import { useNavigate } from "react-router-dom";
import * as S from "./GoToReplyBtn.style"


export default function GoToReplyBtn() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/emotionview')
    }

    return (
        <S.GoToReplyBtnWrapper onClick={handleClick}>
        
            <S.GoToReplyBtnIconWrapper>
                <S.GoToReplyBtnIcon/>
            </S.GoToReplyBtnIconWrapper>
            <S.GoToReplyBtnText>
                답장 보러가기
            </S.GoToReplyBtnText>
        </S.GoToReplyBtnWrapper>
    )
}