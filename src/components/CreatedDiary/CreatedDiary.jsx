import * as S from './CreatedDiary.style';
import BtnBack from '../common/buttons/Back/BtnBack';
import TodayEmotion from '../common/buttons/TodayEmotion/TodayEmotion';

export default function CreatedDiary(){
    return(
        <S.CreatedDiaryWrapper>
            <S.BtnBackWrapper>
                <BtnBack/>
            </S.BtnBackWrapper>
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