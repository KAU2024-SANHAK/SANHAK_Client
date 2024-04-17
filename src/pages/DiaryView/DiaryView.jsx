import * as S from './DiaryView.style'
import CreatedDiary from '../../components/CreatedDiary/CreatedDiary'
import PopUp from '../../components/PopUp/PopUp'
// import MyPagePopUp from '../../components/PopUp/ReplyPopUp/ReplyPopUp'

export default function DiaryView(){
    return(
        <S.DiaryViewPageWrapper>
            <CreatedDiary/>
            <PopUp name={'꿀비의 답장'}>
                {/* <MyPagePopUp/> */}
            </PopUp>
        </S.DiaryViewPageWrapper>
    )
}