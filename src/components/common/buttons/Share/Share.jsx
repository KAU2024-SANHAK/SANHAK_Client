import * as S from './Share.style'
import { shareKakao } from '../../../../utils/shareKakao'

export default function BtnShare({title, image, id}){

    const handleShare = () => {
        shareKakao(title, image, id)
    }
    return(
        <S.ButtonWrapper onClick={()=>{handleShare()}}> 
            <S.ShareBtn/>
        </S.ButtonWrapper>
    )
}