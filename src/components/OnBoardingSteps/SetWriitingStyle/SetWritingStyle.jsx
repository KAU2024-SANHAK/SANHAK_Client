import * as S from './SetWritingStyle.style'
import SetFastButton from '../../common/buttons/SetFastButton/BtnSetFast'
import SetSlowButton from '../../common/buttons/SetSlowButton/BtnSetSlow'

const handleSetWritingStyle= ()=>{
    //선호하는 스타일 전달
    //axios post 이용하면 되겠져>>?? instance 파둬야겠네.////.......
    //이건 ai로 보내나요 백으로 보내나요? 
    console.log(alert('api 요청하세요'))
}
export default function SetWritingStyle(){
    return(
        <S.Wrapper>
            <SetFastButton onClick={()=>{handleSetWritingStyle()}}/>
            <SetSlowButton/>
        </S.Wrapper>
    )
}