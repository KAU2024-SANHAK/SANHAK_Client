import * as S from '../FastDiaryStep.style'
import { useState } from 'react'
import LargeQuestion from '../Questions/LargeQustion'
import BtnNext from '../../common/buttons/Next/BtnNext'
import BtnPrev from '../../common/buttons/Prev/BtnPrev'

export default function FastDiaryStep4({keywords, setKeywords, onNext, onPrev}){
    const [where, setWhere] = useState(keywords.where);

    const handleChange = (event)=>{
        setWhere(event.target.value)
        console.log(keywords)
    }

    const onClickWhere = ()=>{
        onNext()
        setKeywords({...keywords, where: where})
    }

    return(
        <S.FastDiaryStepWrapper>
            <LargeQuestion>
                그렇다면 오늘 너가<br/>
                머물렀던 곳들을 알려줄래?
            </LargeQuestion>
            
            <S.FastDiaryTextAreaWrapper>
                <S.InputArea type='text' placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!' value={where} onChange={handleChange}/>
            </S.FastDiaryTextAreaWrapper>

            <S.ButtonField>
                <BtnPrev onPrev={onPrev}/>
                <BtnNext onNext={()=>{onClickWhere()}}/>
            </S.ButtonField>
        </S.FastDiaryStepWrapper>
    )
}