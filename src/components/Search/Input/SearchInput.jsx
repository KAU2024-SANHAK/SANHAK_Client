import * as S from './SearchInput.style';

function SearchInput ({ onHoverChange }) {
    return (
        <S.InputWrappr>
            <S.Input
                placeholder='검색할 키워드를 입력하세요.'
                onMouseEnter={() => onHoverChange(true)}
                onMouseLeave={() => onHoverChange(false)}/>
        </S.InputWrappr>
    )
}

export default SearchInput;