import * as S from './FastDiary.style'

export default function FastDiary(){
    const date = new Date();
    const today = date.getDate();
    console.log(today%2)
    return(
        <S.FastDairyPageWrapper $isEven = {today%2}>
            <S.WritingForm>

            </S.WritingForm>
        </S.FastDairyPageWrapper>
    )
}