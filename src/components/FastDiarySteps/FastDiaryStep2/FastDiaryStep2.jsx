import * as S from '../FastDiaryStep.style'
import LargeQuestion from '../Questions/LargeQustion'

export default function FastDiaryStep2(){
    return(
        <S.FastDiaryStepWrapper>
            <LargeQuestion>
                오늘 하루름 함께 나누었던<br/>
                사람들이 있을까?
            </LargeQuestion>
            
            <S.FastDiaryTextAreaWrapper>
                <S.InputArea placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!'/>
            </S.FastDiaryTextAreaWrapper>
        </S.FastDiaryStepWrapper>

    )
}