import * as S from './FastDiary.style'
import BtnHome from '../../components/common/buttons/Home/BtnHome';
import DiaryPrgoress from '../../components/DiaryProgress/DiaryProgress';

export default function FastDiary(){
    const date = new Date();
    const today = date.getDate();

    return(
        <S.FastDairyPageWrapper $isEven = {today%2}>
            <BtnHome/>
            <DiaryPrgoress/>
            <S.WritingForm>

            </S.WritingForm>
        </S.FastDairyPageWrapper>
    )
}