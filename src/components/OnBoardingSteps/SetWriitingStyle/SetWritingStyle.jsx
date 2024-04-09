import * as S from './SetWritingStyle.style'
import { useState } from 'react'
import BtnSetFast from '../../common/buttons/SetFastButton/BtnSetFast'
import BtnSetSlow from '../../common/buttons/SetSlowButton/BtnSetSlow'

const handleSetWritingStyle= ()=>{
    //선호하는 스타일 전달
    //axios post 이용하면 되겠져>>?? instance 파둬야겠네.////.......
    //이건 ai로 보내나요 백으로 보내나요? 
    console.log('api 요청하세요')
}

//이 부분은 BtnWrapper 사용하지 않아도 될 것 같았는데, 일단 손에 익힐 겸 사용해 봤습니다.!
//아무래도 알려준 방법이 더 많이 사용될 것 같기 때문에...!

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