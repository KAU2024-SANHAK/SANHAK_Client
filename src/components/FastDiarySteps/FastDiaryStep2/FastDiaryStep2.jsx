import * as S from '../FastDiaryStep.style'
import { useRecoilState } from 'recoil'
import { whoKeyword } from '../../../recoil/atoms'
import LargeQuestion from '../Questions/LargeQustion'
import BtnNext from '../../common/buttons/Next/BtnNext'
import BtnPrev from '../../common/buttons/Prev/BtnPrev'

export default function FastDiaryStep2({onNext, onPrev}){
  const [who, setWho] = useRecoilState(whoKeyword);

  const handleChange = (event)=>{
    setWho(event.target.value);
  };

  return(
    <S.FastDiaryStepWrapper>
      <LargeQuestion>
        오늘 하루를 함께 나누었던
        <br />
        사람들이 있을까?
      </LargeQuestion>
          
      <S.FastDiaryTextAreaWrapper>
        <S.InputArea 
          name='who' 
          type='text' 
          placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!' 
          value={who} 
          onChange={handleChange}
        />
      </S.FastDiaryTextAreaWrapper>

      <S.ButtonField>
        <BtnPrev onPrev={onPrev} />
        <BtnNext 
          onNext={() => {
            onNext();
          }}
        />
      </S.ButtonField>
    </S.FastDiaryStepWrapper>
  );
}