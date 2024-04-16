import * as S from "./DiaryList.style"

export default function DiaryList() {
    return (
        <S.DiaryListWrapper>
            <S.DiaryPhoto/>
            <S.TextWarpper>
                <S.TextTitle>
                    배가 아프지만 참은 날
                </S.TextTitle>
                <S.TextDate>
                    2024.03.25
                </S.TextDate>
            </S.TextWarpper>
        </S.DiaryListWrapper>
    )
}