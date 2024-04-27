import * as S from './DiaryView.style'
import CreatedDiary from '../../components/CreatedDiary/CreatedDiary'
import PopUp from '../../components/PopUp/PopUp'

export default function DiaryView(){
    return(
        <S.DiaryViewPageWrapper>
            <S.DiaryViewFilter>
                <CreatedDiary/>
            </S.DiaryViewFilter>
        </S.DiaryViewPageWrapper>
    )
}