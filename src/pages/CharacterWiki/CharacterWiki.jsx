import * as S from './CharacterWiki.style'
import { useNavigate } from 'react-router-dom'
import BtnBack from '../../components/common/buttons/Back/BtnBack'
import WikiCarousel from '../../components/Carousel/WikiCarousel/WikiCarousel'

export default function CharacterWiki(){
    const navigate = useNavigate();
    const GoMyPage=()=>{
        navigate('/mypage');
    }

    const HoneyBearCustom=[
        {name: '일반 곰돌이', component: <S.HoneyBear height='13.3rem'/>},
        {name: '멋진 곰돌이', component: <S.HoneyBear height='13.3rem'/>},
        {name: '소학 곰돌이', component: <S.HoneyBear height='13.3rem'/>},
        {name: '꿀벌 곰돌이', component: <S.HoneyBear height='13.3rem'/>},
        {name: '왕자 곰돌이', component: <S.HoneyBear height='13.3rem'/>}
    ]

    return(
        <S.CharacterWikiPageWrapper>
            <S.ButtonField>
                <BtnBack onClick={()=>{GoMyPage()}}/>
            </S.ButtonField>

            <S.WikiWrapper>
                <S.CharacterNameWrapper>
                    곰돌이
                </S.CharacterNameWrapper>

                <WikiCarousel customs={HoneyBearCustom}/>
            </S.WikiWrapper>

            <S.WikiWrapper>
                <S.CharacterNameWrapper>
                    꿀벌
                </S.CharacterNameWrapper>

                <WikiCarousel customs={HoneyBearCustom}/>
            </S.WikiWrapper>
            

        </S.CharacterWikiPageWrapper>
    )
}