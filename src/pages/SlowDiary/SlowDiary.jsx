import * as S from './SlowDiary.style'

export default function SlowDiary(){
    const date = new Date();
    const today = date.getDate();

    return(
        <S.SlowDiaryPageWrapper  $isEven = {today%2}>
            <h1>hi</h1>
        </S.SlowDiaryPageWrapper>
    )   
}