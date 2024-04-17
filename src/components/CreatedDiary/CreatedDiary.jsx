import * as S from './CreatedDiary.style';
import BtnHome from '../common/buttons/Home/BtnHome'
import TodayEmotion from '../common/buttons/TodayEmotion/TodayEmotion';
import { useNavigate } from 'react-router-dom';

export default function CreatedDiary(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/main')
    }
    return(
        <S.CreatedDiaryWrapper>
            <S.BtnHomeWrapper onClick={handleClick}>
                <BtnHome/>
            </S.BtnHomeWrapper>
            <S.TodeayEmotionBtnWrapper>
                <TodayEmotion/>
            </S.TodeayEmotionBtnWrapper>
            <S.CreatedDiaryComponentWrapper>
                <S.DiaryTopTextWrapper>
                    <S.DiaryTitle>
                        제목 불러오기
                    </S.DiaryTitle>
                    <S.DiaryDate>
                        날짜 불러오기
                    </S.DiaryDate>
                </S.DiaryTopTextWrapper>
                <S.DiaryPhotoWrapper/>
                <S.DiaryTextWrapper>
                    <S.DiaryText>
                        API 불러오기
                    </S.DiaryText>
                </S.DiaryTextWrapper>
            </S.CreatedDiaryComponentWrapper>
        </S.CreatedDiaryWrapper>
    )
}