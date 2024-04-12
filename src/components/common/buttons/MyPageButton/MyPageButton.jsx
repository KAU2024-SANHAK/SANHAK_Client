import { useNavigate } from "react-router-dom"
import * as S from "./MyPageButton.style"

export default function MyPageButton() {
    const navigate = useNavigate();
    return (
        <S.Wrapper onClick={navigate("/mypage")}>
            마이페이지
        </S.Wrapper>
    )
}