import * as S from './FeelingHive.style';
import { useRecoilState } from 'recoil';
import { feelingKeyword } from '../../../recoil/atoms';
import BtnDiaryFeeling from '../../common/buttons/DiaryFeelings/BtnDiaryFeeling';
import BtnHoneyPot from '../../common/buttons/HoneyPot/BtnHoneyPot';

export default function FeelingHive() {
  const [feeling, setFeeling] = useRecoilState(feelingKeyword);
  return (
    <S.FeelingHiveWrapper>
      <S.FirstLayer>
        <BtnDiaryFeeling
          feeling={feeling}
          setFeeling={setFeeling}
          color='#FFCA99'
          text='놀람'
          value='SURPRISED'
        >
          놀람
        </BtnDiaryFeeling>
        <BtnDiaryFeeling
          feeling={feeling}
          setFeeling={setFeeling}
          color='#B9FFB3'
          text='평온'
          value='RELAX'
        >
          평온
        </BtnDiaryFeeling>
      </S.FirstLayer>

      <S.SecondLayer>
        <BtnDiaryFeeling
          feeling={feeling}
          setFeeling={setFeeling}
          color='#FFF1A8'
          text='기쁨'
          value='HAPPY'
        >
          기쁨
        </BtnDiaryFeeling>
        <BtnDiaryFeeling 
          feeling={feeling}
          setFeeling={setFeeling}
          color='#FFFFFF'
          value='NONE'
        >
          감정을 <br/>
          모르겠어요.
        </BtnDiaryFeeling>
        <BtnDiaryFeeling
          feeling={feeling}
          setFeeling={setFeeling}
          color='#C3C9FF'
          value='WORRIED'
        >
          걱정
        </BtnDiaryFeeling>
      </S.SecondLayer>

      <S.ThirdLayer>
        <BtnDiaryFeeling
          feeling={feeling}
          setFeeling={setFeeling}
          color='#B4F2FF'
          value='SAD'
        >
          슬픔
        </BtnDiaryFeeling>
        <BtnDiaryFeeling
          feeling={feeling}
          setFeeling={setFeeling}
          color='#FFB6B6'
          value='ANGRY'
        >
          분노
        </BtnDiaryFeeling>
      </S.ThirdLayer>
    </S.FeelingHiveWrapper>
  );
}
