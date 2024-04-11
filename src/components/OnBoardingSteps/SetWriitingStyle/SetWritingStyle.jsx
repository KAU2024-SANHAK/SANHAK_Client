import * as S from './SetWritingStyle.style'
import { useState } from 'react'
import BtnSetFast from '../../common/buttons/SetFastButton/BtnSetFast'
import BtnSetSlow from '../../common/buttons/SetSlowButton/BtnSetSlow'

const handleSetWritingStyle= ()=>{
    console.log('api 요청하세요')
}

export default function SetWritingStyle(){
    const [type, setType] = useState();

    return(
        <S.Wrapper>
            <S.BtnWrapper
            onClick={()=>{
                handleSetWritingStyle();
                setType('Fast')
            }}
            >
                <BtnSetFast color = {type === 'Fast' ? '#FFA8BC' : '#FFDFE7'}/>
            </S.BtnWrapper>

            <S.BtnWrapper 
            onClick={()=>{
                handleSetWritingStyle();
                setType('Slow')
            }}
            >
                <BtnSetSlow color = {type === 'Slow' ? '#FFA8BC' : '#FFDFE7'}/>
            </S.BtnWrapper>
        </S.Wrapper>
    )
}