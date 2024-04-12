import { useNavigate } from "react-router-dom"
import * as S from "./MyPageButton.style"

export default function MyPageButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/mypage')
    }

    return (
        <S.Wrapper onClick={handleClick}>
            <S.MyPageIcon/>
            <S.MyPageText>
                마이페이지
            </S.MyPageText>
        </S.Wrapper>
    )
}