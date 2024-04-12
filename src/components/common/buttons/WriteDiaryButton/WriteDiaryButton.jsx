import * as S from "./WriteDiaryButton.style"

export default function WriteDiaryButton(props) {
    return (
        <S.Wrapper onClick={()=>props.WriteDiary}> // WriteDiary 함수를 불러오도록 함
            // + 이미지 넣기
        </S.Wrapper>
    )
}