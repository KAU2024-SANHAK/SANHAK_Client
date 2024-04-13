import * as S from './Main.style'
import MyPageButton from '../../components/common/buttons/MyPageButton/MyPageButton'
import SearchByEmotionButton from '../../components/common/buttons/SearchByEmotionButton/SearchByEmotionButton'

export default function Main(){
    return(
        <S.Wrapper>
            <MyPageButton/>  
            <SearchByEmotionButton/>    
        </S.Wrapper>
    )
}