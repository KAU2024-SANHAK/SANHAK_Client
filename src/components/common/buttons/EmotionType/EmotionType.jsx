import * as S from "./EmotionType.style";
import { useNavigate } from "react-router-dom";
import { usePostFeelingList } from "../../../../hooks/queries/mypage/usePostFeelingList";

export default function BtnEmotionType({name, btnEnum}) {
    const { mutation } = usePostFeelingList();
    const navigate = useNavigate();
    
    const handleClick = () => {
        const body = {
            feeling : btnEnum,
        }
        mutation.mutate(body, {
            onSuccess: (response) => {
                console.log(response)
                navigate('/searchbyemotion/diarylist')
            }
        })
    }
    
    return (
        <S.EmotionTypeBtnWrapper onClick={handleClick}>
            <S.EmotionTypeBtnText>
                {name}
            </S.EmotionTypeBtnText>
        </S.EmotionTypeBtnWrapper>
    )
}