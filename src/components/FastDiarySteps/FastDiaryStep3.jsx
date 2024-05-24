import * as S from './FastDiaryStep.style';
import { useRecoilState } from 'recoil';
import { whenKeyword } from '../../recoil/atoms';
import SmallQuestion from './Questions/SamllQuestion';
import BtnNext from '../common/buttons/Next/BtnNext';
import BtnPrev from '../common/buttons/Prev/BtnPrev';

export default function FastDiaryStep3({ onNext, onPrev }) {
  const [when, setWhen] = useRecoilState(whenKeyword);

  const handleChange = (event) => {
    setWhen(event.target.value);
  };

  return (
    <S.FastDiaryStepWrapper>
      <S.QuestionWrapper>
        <SmallQuestion>언제쯤 일어난 일이야?</SmallQuestion>
        <S.InputPng>
          <S.InputArea
            name='when'
            type='text'
            placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!'
            value={when}
            onChange={handleChange}
          />
        </S.InputPng>
      </S.QuestionWrapper>

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
