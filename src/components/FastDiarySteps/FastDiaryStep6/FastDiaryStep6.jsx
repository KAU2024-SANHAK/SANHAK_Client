import * as S from '../FastDiaryStep.style'
import LargeQuestion from '../Questions/LargeQustion'
import BtnNext from '../../common/buttons/Next/BtnNext'
import BtnPrev from '../../common/buttons/Prev/BtnPrev'

export default function FastDiaryStep6({onNext, onPrev}){
    return(
        <S.FastDiaryStepWrapper>
            <LargeQuestion>
                하루를 돌아보면서<br/>
                느꼈던 것들이 있다면 말해줄래?
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