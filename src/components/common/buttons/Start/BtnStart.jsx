import * as S from './BtnStart.style'
import { useNavigate } from 'react-router-dom'

export default function BtnStart(){
    const navigate = useNavigate()

    return(
        <S.ButtonWrapper onClick={()=>{navigate('/onboarding')}}>
            <S.StartButton/>
        </S.ButtonWrapper>
    )
}