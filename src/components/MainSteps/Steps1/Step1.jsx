import * as S from "..Step2.style"

export default function Step1(props) {
    return(
        <S.Wrapper>
            <S.MainBody>
                {/* MyPageButton 컴포넌트 */}
                {/* SearchByEmotion 컴포넌트 */}
                {/* ThisMonthEmothin 컴포넌트 */}
            </S.MainBody>
            <S.MainFooter>
                <MainProgressbar cur='Step1'/>
            </S.MainFooter>
        </S.Wrapper>
    )
}