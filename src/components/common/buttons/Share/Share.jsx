import * as S from './Share.style'
import { shareKakao } from '../../../../utils/shareKakao'

export default function Share({title, image}){

    const handleShare = () => {
        shareKakao(title, image)
    }
    return(
        <S.ButtonWrapper onClick={()=>{handleShare()}}> 
            <S.ShareBtn/>
        </S.ButtonWrapper>
    )
}