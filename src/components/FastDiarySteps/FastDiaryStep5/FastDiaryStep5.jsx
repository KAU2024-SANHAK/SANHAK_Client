import * as S from '../FastDiaryStep.style'
import { useRecoilState } from 'recoil'
import { whatKeyword } from '../../../recoil/atoms'
import LargeQuestion from '../Questions/LargeQustion'
import BtnNext from '../../common/buttons/Next/BtnNext'
import BtnPrev from '../../common/buttons/Prev/BtnPrev'

export default function FastDiaryStep5({onNext, onPrev}){
    const [what, setWhat] = useRecoilState(whatKeyword);

    const handleChange = (event)=>{
        setWhat(event.target.value)
    }

    return(
        <S.FastDiaryStepWrapper>
            <LargeQuestion>
                오늘 어떤 일이 있었어?<br/>
                사소한 일이라도 좋아!
            </LargeQuestion>
            
            <S.FastDiaryTextAreaWrapper>
                <S.InputArea type='text' placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!' value={what} onChange={handleChange}/>
            </S.FastDiaryTextAreaWrapper>

            <S.ButtonField>
                <BtnPrev onPrev={onPrev}/>
                <BtnNext onNext={()=>{onNext()}}/>
            </S.ButtonField>
        </S.FastDiaryStepWrapper>

    )
}