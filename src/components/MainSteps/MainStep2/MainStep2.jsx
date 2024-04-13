import * as S from "..Steps.style"

export default function Step1(props) {
    return(
        <S.Wrapper>
            <S.MainBody>
                {/* 달력 컴포넌트 */}
                {/* 일기 리스트로 나타내는 컴포넌트 */}
            </S.MainBody>
            <S.MainFooter>
                <MainProgressbar cur='Step2'/>
            </S.MainFooter>
        </S.Wrapper>
    )
}