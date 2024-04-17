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
            <S.TodayEmotionBtnWrapper>
                <TodayEmotion/>
            </S.TodayEmotionBtnWrapper>
            <S.CreatedDiaryComponentWrapper>
                <S.DiaryTopTextWrapper>
                    <S.DiaryTitle>
                        할 수 없이 고기를 먹어서 배탈난 날
                    </S.DiaryTitle>
                    <S.DiaryDate>
                        2024.03.25 월
                    </S.DiaryDate>
                </S.DiaryTopTextWrapper>
                <S.DiaryPhotoWrapper/>
                <S.DiaryTextWrapper>
                    <S.DiaryText>
                    저녁으로 동기들과 꼬기꼬기에서 고기를 먹었다.
배가 안고팠음에도 불구하고 고기를 먹으니 배탈이 났나보다. 배가 이렇게 아픈 적은 처음이었다.
하지만 소화제를 먹고 나아져서 정말 다행이었다.
                    </S.DiaryText>
                </S.DiaryTextWrapper>
            </S.CreatedDiaryComponentWrapper>
        </S.CreatedDiaryWrapper>
    )
}