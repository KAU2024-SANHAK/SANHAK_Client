import SvgIcStartButton from "../../../../assets/svg/IcStartButton";
import * as S from './BtnStart.style'

const handleNavigate= ()=>{
    //최초 여부 판단하여 온보딩 혹은 메인 화면으로 이동합니다.
}

export default function BtnStart(){
    
    return(
        <S.Wrapper onClick={()=>{handleNavigate()}}>
            <S.StartButton/>
        </S.Wrapper>
    )
}