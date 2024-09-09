import { useState } from 'react';
import CurrentBox from '../../components/Search/CurrentBox/CurrentBox';
import DiaryBox from '../../components/Search/DiaryBox/DiaryBox';
import FeelingBox from '../../components/Search/FeelingBox/FeelingBox';
import SearchInput from '../../components/Search/Input/SearchInput';
import * as S from './SearchDiary.style';
import { Navigate, useNavigate } from 'react-router-dom';

function SearchDiary() {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const handleHomeBtn = () => {
        navigate('/main');
    }
    return (
        <S.SearchingWrapper>
            <S.Header>
            <SearchInput onHoverChange={setIsHovered} />
            {isHovered?<S.BackBtn>검색</S.BackBtn>:<S.BackBtn onClick={handleHomeBtn}>취소</S.BackBtn>}
           
            </S.Header>

            {isHovered ? (
                <DiaryBox />
            ) : (
                <>
                    <S.FeelingBtnList>
                        <p>감정별 조회</p>
                        <FeelingBox />
                    </S.FeelingBtnList>

                    <S.CurrentBoxList>
                        <p>최근 검색</p>
                        <CurrentBox />
                    </S.CurrentBoxList>
                </>
            )}
        </S.SearchingWrapper>
    )
}

export default SearchDiary;