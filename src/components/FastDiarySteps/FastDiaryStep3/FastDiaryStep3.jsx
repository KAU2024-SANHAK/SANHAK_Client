import * as S from '../FastDiaryStep.style'
import SmallQuestion from '../Questions/SamllQuestion'
import BtnNext from '../../common/buttons/Next/BtnNext'
import BtnPrev from '../../common/buttons/Prev/BtnPrev'

export default function FastDiaryStep3({keywords, setKeywords, onNext, onPrev}){
    return(
        <S.FastDiaryStepWrapper>
            <S.FastDiaryContentWrapper>
                <SmallQuestion>
                    언제쯤 일어난 일이야?
                </SmallQuestion>
                
                <S.FastDiaryTextAreaWrapper>
                    <S.InputArea placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!'/>
                </S.FastDiaryTextAreaWrapper>
            </S.FastDiaryContentWrapper>

            <S.ButtonField>
                <BtnPrev onPrev={onPrev}/>
                <BtnNext onNext={onNext}/>
            </S.ButtonField>
        </S.FastDiaryStepWrapper>

    )
}