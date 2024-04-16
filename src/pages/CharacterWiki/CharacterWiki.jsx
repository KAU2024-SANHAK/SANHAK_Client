import * as S from './CharacterWiki.style'
import { useNavigate } from 'react-router-dom'
import BtnBack from '../../components/common/buttons/Back/BtnBack'
import WikiCarousel from '../../components/Carousel/WikiCarousel/WikiCarousel'

export default function CharacterWiki(){
    const navigate = useNavigate();
    const GoMyPage=()=>{
        navigate('/mypage');
    }

    return(
        <S.CharacterWikiPageWrapper>
            <S.ButtonField>
                <BtnBack onClick={()=>{GoMyPage()}}/>
            </S.ButtonField>

            <S.WikiWrapper>
                <S.CharacterNameWrapper>
                    곰돌이
                </S.CharacterNameWrapper>

                <WikiCarousel/>
            </S.WikiWrapper>

            <S.WikiWrapper>
                <S.CharacterNameWrapper>
                    꿀벌
                </S.CharacterNameWrapper>

                <WikiCarousel/>
            </S.WikiWrapper>
            

        </S.CharacterWikiPageWrapper>
    )
}