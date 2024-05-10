import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { userDiaryType } from "../../../../recoil/atoms"
import * as S from "./WriteDiaryButton.style"

export default function WriteDiaryButton() {
    const [type, setType] = useRecoilState(userDiaryType); // atom 사용

    const navigate = useNavigate();

    const handleClick = () => {
        type === 'FASTTYPE' ? navigate('/fastdiary') : navigate('/slowdiary') 
    }

    return (
        <S.Wrapper onClick={handleClick}>
            <S.WriteDiaryButtonIcon/>
        </S.Wrapper>
    )
}

