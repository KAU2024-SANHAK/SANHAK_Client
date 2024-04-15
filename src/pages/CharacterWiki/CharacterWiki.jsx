import * as S from './CharacterWiki.style'
import BtnBack from '../../components/common/buttons/Back/BtnBack'

export default function CharacterWiki(){
    return(
        <S.CharacterWikiPageWrapper>
            <S.ButtonField>
                <BtnBack/>
            </S.ButtonField>
            <h1>gi</h1>
            <S.WikiWrapper>
                곰돌이
            </S.WikiWrapper>
            <S.WikiWrapper>
                꿀벌
            </S.WikiWrapper>
        </S.CharacterWikiPageWrapper>
    )
}