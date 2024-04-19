import * as S from '../FastDiaryStep.style'
import LargeQuestion from '../Questions/LargeQustion'
import BtnNext from '../../common/buttons/Next/BtnNext'
import BtnPrev from '../../common/buttons/Prev/BtnPrev'

export default function FastDiaryStep5({keywords, setKeywords, onNext, onPrev}){
    return(
        <S.FastDiaryStepWrapper>
            <LargeQuestion>
                오늘 어떤 일이 있었어?<br/>
                사소한 일이라도 좋아!
            </LargeQuestion>
            
            <S.FastDiaryTextAreaWrapper>
                <S.InputArea placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!'/>
            </S.FastDiaryTextAreaWrapper>

            <S.ButtonField>
                <BtnPrev onPrev={onPrev}/>
                <BtnNext onNext={onNext}/>
            </S.ButtonField>
        </S.FastDiaryStepWrapper>

    )
}