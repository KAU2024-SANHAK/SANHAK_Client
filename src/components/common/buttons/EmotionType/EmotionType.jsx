import * as S from "./EmotionType.style";
import { useRecoilState } from "recoil";
import { diaryList } from "../../../../recoil/atoms";
import { useNavigate } from "react-router-dom";
import { usePostFeelingList } from "../../../../hooks/queries/mypage/usePostFeelingList";

export default function BtnEmotionType({name, btnEnum}) {
    const [diaryListAtom, setDiaryListAtom] = useRecoilState(diaryList);
    const { mutation } = usePostFeelingList();
    const navigate = useNavigate();
    
    const handleClick = () => {
        const body = {
            feeling : btnEnum,
        }
        mutation.mutate(body, {
            onSuccess: (response) => {
                console.log(response);
                setDiaryListAtom(response.data.feelingList);    
                navigate('/searchbyemotion/diarylist');
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