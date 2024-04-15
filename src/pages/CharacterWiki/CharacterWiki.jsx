import * as S from './CharacterWiki.style'
import BtnBack from '../../components/common/buttons/Back/BtnBack'

export default function CharacterWiki(){
    return(
        <S.CharacterWikiPageWrapper>
            <BtnBack/>
            <h1>gi</h1>
            <S.HoneyBearWikiWrapper>
                곰돌이
            </S.HoneyBearWikiWrapper>
            <S.HoneyBeeWikiWrapper>
                꿀벌
            </S.HoneyBeeWikiWrapper>
        </S.CharacterWikiPageWrapper>
    )
}