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

                <BtnSetFast color = {type === 'Fast' ? '#FFA8BC' : '#FFDFE7'}
                    onClick={()=>{
                    handleSetWritingStyle();
                    setType('Fast')
                }}
                />

                <BtnSetSlow color = {type === 'Slow' ? '#FFA8BC' : '#FFDFE7'}
                    onClick={()=>{
                    handleSetWritingStyle();
                    setType('Slow')
                    }}
                />
                
        </S.Wrapper>
    )
}