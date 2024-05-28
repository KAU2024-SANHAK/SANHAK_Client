import * as S from './FastDiaryStep.style';
import { useRecoilState } from 'recoil';
import { whereKeyword } from '../../recoil/atoms';
import LargeQuestion from './Questions/LargeQustion';
import BtnNext from '../common/buttons/Next/BtnNext';
import BtnPrev from '../common/buttons/Prev/BtnPrev';

export default function FastDiaryStep4({ onNext, onPrev }) {
  const [where, setWhere] = useRecoilState(whereKeyword);

  const handleChange = (event) => {
    setWhere(event.target.value);
  };

  return (
    <S.FastDiaryStepWrapper>
      <S.QuestionWrapper>
        <LargeQuestion>
          그렇다면 오늘 너가
          <br />
          머물렀던 곳들을 알려줄래?
        </LargeQuestion>
        <S.InputPng>
          <S.InputArea
            name='where'
            type='text'
            placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!'
            value={where}
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
