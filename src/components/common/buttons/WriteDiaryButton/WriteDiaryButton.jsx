import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { diaryTypeState } from "./recoilAtoms" // Recoil atom 가져오기
import * as S from "./WriteDiaryButton.style"

export default function WriteDiaryButton() {
    // const [type, setType] = useRecoilState(diaryTypeState); // atom 사용

    const navigate = useNavigate();

    // const handleClick = () => {
    //     type === 'FASTTYPE' ? naviagate('/fastdiary') : navigate('/slowdiary') 
    // }

    const handleClick = () => {
        navigate('/writediary')
    }

    return (
        <S.Wrapper onClick={handleClick}>
            <S.WriteDiaryButtonIcon/>
        </S.Wrapper>
    )
}

