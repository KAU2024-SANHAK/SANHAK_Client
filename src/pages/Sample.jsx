import FastDiaryStep1 from '../components/FastDiarySteps/FastDiaryStep1/FastDiaryStep1'
import * as S from './Sample.style'

export default function Sample(){
    return(
        <S.Wrapper>

            <S.WritingForm>
                <FastDiaryStep1/>
            </S.WritingForm>
        </S.Wrapper>
    )
}