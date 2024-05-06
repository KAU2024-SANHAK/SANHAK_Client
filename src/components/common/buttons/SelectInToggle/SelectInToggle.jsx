import * as S from './SelectInToggle.style'
export default function SelectInToggle({onClick, currentYear, currentMonth}) {

    return (
        //  클릭되지 않으면 none, 클릭되면 popup, popup 안에 어떤 컴포넌트가 들어갈지도 정하기
        <S.Wrapper onClick={onClick}>
            {currentYear}.
            {currentMonth + 1}
            <S.CalendarToggleWrapper>
                <S.CalendarToggle/>
            </S.CalendarToggleWrapper>
        </S.Wrapper>

    )
}