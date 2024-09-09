import CurrentBox from '../../components/Search/CurrentBox/CurrentBox';
import DiaryBox from '../../components/Search/DiaryBox/DiaryBox';
import FeelingBox from '../../components/Search/FeelingBox/FeelingBox';
import SearchInput from '../../components/Search/Input/SearchInput';
import * as S from './SearchDiary.style';

function SearchDiary() {
    return (
        <S.SearchingWrapper>
            <DiaryBox/>
            <FeelingBox/>
            <SearchInput/>
            <CurrentBox/>
        </S.SearchingWrapper>
    )
}

export default SearchDiary;