import * as S from '../FastDiaryStep.style'
import LargeQuestion from '../Questions/LargeQustion'

export default function FastDiaryStep4(){
    return(
        <S.FastDiaryStepWrapper>
            <LargeQuestion>
                그렇다면 오늘 너가<br/>
                머물렀던 곳들을 알려줄래?
            </LargeQuestion>
            
            <S.FastDiaryTextAreaWrapper>
                <S.InputArea placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!'/>
            </S.FastDiaryTextAreaWrapper>
        </S.FastDiaryStepWrapper>
    )
}