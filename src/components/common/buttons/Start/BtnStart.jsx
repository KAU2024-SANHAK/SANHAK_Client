import SvgIcStartButton from "../../../../assets/svg/IcStartButton";
import * as S from './BtnStart.style'
import { useNavigate } from 'react-router-dom'


export default function BtnStart(){
    const navigate = useNavigate()

    return(
        <S.Wrapper onClick={()=>{navigate('/main')}}>
            <S.StartButton/>
        </S.Wrapper>
    )
}