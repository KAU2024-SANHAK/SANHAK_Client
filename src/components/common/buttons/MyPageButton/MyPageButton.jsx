import { useNavigate } from "react-router-dom"
import * as S from "./MyPageButton.style"

export default function MyPageButton() {
    const navigate = useNavigate();
    return (
        <S.Wrapper onClick={navigate("/mypage")}>
            <S.MyPageIcon/>
            <S.MyPageText>
                마이페이지
            </S.MyPageText>
        </S.Wrapper>
    )
}