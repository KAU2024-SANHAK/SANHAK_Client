import * as S from './SetWritingStyle.style'
import { useState } from 'react'
import BtnSetDiaryType from '../common/buttons/setDiaryType/BtnSetDiaryType'

const handleSetWritingStyle= ()=>{
    console.log('api 요청하세요')
}

export default function SetWritingStyle(){
    const [type, setType] = useState();

    return(
        <S.Wrapper>

                <BtnSetDiaryType isClick = {type === 'Fast' ? true : false}
                    onClick={()=>{
                    handleSetWritingStyle();
                    setType('Fast')
                    }} >
                    빠른 일기
                </BtnSetDiaryType>

                <BtnSetDiaryType isClick = {type === 'Slow' ? true : false}
                    onClick={()=>{
                    handleSetWritingStyle();
                    setType('Slow')
                    }} >
                    느린 일기
                </BtnSetDiaryType>
                
        </S.Wrapper>
    )
}