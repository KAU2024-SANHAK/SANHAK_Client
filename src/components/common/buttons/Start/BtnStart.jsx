import SvgIcStartButton from "../../../../assets/svg/IcStartButton";
import * as S from './BtnStart.style'

const handleNavigate= ()=>{

}

export default function BtnStart(){
    
    return(
        <S.Wrapper onClick={()=>{handleNavigate()}}>
            <SvgIcStartButton/>
        </S.Wrapper>
    )
}