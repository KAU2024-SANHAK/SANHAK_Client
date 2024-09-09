import * as S from './SearchInput.style';

function SearchInput () {
    return (
        <S.InputWrappr>
            <S.Input placeholder='검색할 키워드를 입력하세요.'/>
        </S.InputWrappr>
    )
}

export default SearchInput;