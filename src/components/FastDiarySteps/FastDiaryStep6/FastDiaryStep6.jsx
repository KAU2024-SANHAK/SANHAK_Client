import * as S from '../FastDiaryStep.style'
import { useState } from 'react'
import { useModal } from '../../../hooks/common/useModal'
import LargeQuestion from '../Questions/LargeQustion'
import BtnNext from '../../common/buttons/Next/BtnNext'
import BtnPrev from '../../common/buttons/Prev/BtnPrev'

export default function FastDiaryStep6({keywords, setKeywords, onNext, onPrev}){
    const [realized, setRealized] = useState(keywords.realized);
    const [isOpen, opneModal, closeModal] = useModal();

    const handleChange = (event)=>{
        setRealized(event.target.value)
        console.log(keywords)
    }

    const checkNull = ()=>{
        keywords.map((keyword)=>(
            keyword === '' ?   console.log(no) : null
        ))
    }

    const onClickSubmit = ()=>{
        onNext()
        setKeywords({...keywords, realized: realized})
    }

    return(
        <S.FastDiaryStepWrapper>
            <LargeQuestion>
                하루를 돌아보면서<br/>
                느꼈던 것들이 있다면 말해줄래?
            </LargeQuestion>
            
            <S.FastDiaryTextAreaWrapper>
                <S.InputArea type='text' placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!' value={realized} onChange={handleChange}/>
            </S.FastDiaryTextAreaWrapper>

            <S.ButtonField>
                <BtnPrev onPrev={onPrev}/>
                <BtnNext onNext={()=>{onClickSubmit()}}/>
            </S.ButtonField>
        </S.FastDiaryStepWrapper>

    )
}