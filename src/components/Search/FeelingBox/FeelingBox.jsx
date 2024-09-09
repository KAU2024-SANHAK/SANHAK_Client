import { useNavigate } from 'react-router-dom';
import { IcHappyBear, IcSadBear, IcAngryBear, IcWorriedBear, IcCalmBear, IcSurprisedBear } from '../../../assets/svg';
import * as S from './FeelingBox.style';
import usePostFeelingList from '../../../hooks/queries/mypage/usePostFeelingList';
import { useRecoilState } from 'recoil';
import { diaryListAtom } from '../../../recoil/atoms';

function FeelingBox () {
    const navigate = useNavigate();
    const mutation = usePostFeelingList();
    const [diaryList, setDiaryList] = useRecoilState(diaryListAtom);
    
    const feelings = [
        { icon: IcHappyBear, label: "기쁨", text: 'HAPPY' },
        { icon: IcSadBear, label: "슬픔", text: 'SAD'},
        { icon: IcAngryBear, label: "분노",text: 'ANGRY' },
        { icon: IcWorriedBear, label: "걱정",text: 'WORRIED' },
        { icon: IcCalmBear, label: "평온",text : 'RELAX' },
        { icon: IcSurprisedBear, label: "놀람",text: 'SURPRISED' },
    ];

    const handleFeelingBtn = (btnEnum) => {
        const body = {
            feeling : btnEnum,
          };
      
          mutation.mutate(body, {
            onSuccess: (response) => {
              setDiaryList(handleList(response.data.feelingList));
              navigate('/searchbyemotion/diarylist');
            },
            onError: (error) => {
              setErrorMessage(error.response.data.message);
              console.log(errorMessage);
            //   openModal();
            }
          });
    }
    return (
        <S.CarouselWrapper>
            {feelings.map((feeling, index) => (
                <S.FeelingBoxWrapper key={index} onClick={()=>{handleFeelingBtn(feeling.text)}}>
                        <feeling.icon />
                        {feeling.label}
                </S.FeelingBoxWrapper>
            ))}
        </S.CarouselWrapper>
    )
}

export default FeelingBox;