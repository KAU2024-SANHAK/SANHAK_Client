// import { useNavigate } from "react-router-dom"
// import { useRecoilState } from "recoil"
// import * as S from "./WriteDiaryButton.style"

// export default function WriteDiaryButton() {
//     const [type, setType] = useRecoilState('diaryTypeState');
//     const navigate = useNavigate();
//     const handleClick = () => {
//         if (type === '빠른일기') {
//             navigate('/fastdiary')
//         }
//         else if (type === '느린일기') {
//             navigate('/slowdiary')
//         }
//     }

//     return (
//         <S.Wrapper onClick={handleClick}>
//             <S.WriteDiaryButtonIcon/>
//         </S.Wrapper>
//     )
// }

import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { diaryTypeState } from "./recoilAtoms" // Recoil atom 가져오기
import * as S from "./WriteDiaryButton.style"

export default function WriteDiaryButton() {
    const [type, setType] = useRecoilState(diaryTypeState); // atom 사용

    const navigate = useNavigate();

    const handleClick = () => {
        if (type === '빠른일기') {
            navigate('/fastdiary')
        }
        else if (type === '느린일기') {
            navigate('/slowdiary')
        }
    }

    return (
        <S.Wrapper onClick={handleClick}>
            <S.WriteDiaryButtonIcon/>
        </S.Wrapper>
    )
}

