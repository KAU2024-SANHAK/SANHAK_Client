import * as S from './DiaryBox.style';

function DiaryBox () {
    return (
        <S.DiaryBoxWrapper>
            <S.Img/>
            <S.TextWrapper>
                <S.DiaryContent>...내가 어제 일기를 썼는데...</S.DiaryContent>
                <S.Date>2024.03.02 | 운수좋은 날</S.Date>
            </S.TextWrapper>
        </S.DiaryBoxWrapper>
    )
}

export default DiaryBox;