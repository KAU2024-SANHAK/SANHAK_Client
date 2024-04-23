import * as S from '../FastDiaryStep.style'
import { useState } from 'react'
import LargeQuestion from '../Questions/LargeQustion'
import BtnNext from '../../common/buttons/Next/BtnNext'
import BtnPrev from '../../common/buttons/Prev/BtnPrev'

export default function FastDiaryStep2({onNext, onPrev}){
    const [who, setWho] = useState(keywords.who);

    const handleChange = (event)=>{
        setKeywords({...keywords, who: event.target.value})
        console.log(keywords)
    }

    const onClickWho = ()=>{
        onNext()
        setKeywords({...keywords, who: who})
    }

    return(
        <S.FastDiaryStepWrapper>
            <LargeQuestion>
                오늘 하루름 함께 나누었던<br/>
                사람들이 있을까?
            </LargeQuestion>
                
            <S.FastDiaryTextAreaWrapper>
                <S.InputArea type = 'text' placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!' value={keywords.who} onChange={handleChange}/>
            </S.FastDiaryTextAreaWrapper>

            <S.ButtonField>
                <BtnPrev onPrev={onPrev}/>
                <BtnNext onNext={()=>{onClickWho()}}/>
            </S.ButtonField>
        </S.FastDiaryStepWrapper>

    )
}