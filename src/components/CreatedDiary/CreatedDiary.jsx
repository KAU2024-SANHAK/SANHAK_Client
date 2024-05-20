import * as S from './CreatedDiary.style';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { diaryFeeling, diaryImage } from '../../recoil/atoms';
import usePostFeeling from '../../hooks/queries/create/usePostFeeling';
import usePostAiImage from '../../hooks/queries/create/usePostAiImage';
import useResetDiary from '../../hooks/diary/useResetDiaryAtom';
import BtnShowFeeling from '../common/buttons/ShowFeeling/BtnShowFeeling';
import Loading from '../../pages/Loading/Loading';
import createImgBtn from '../../assets/img/createImgBtn.png';
import CircleLoading from '../Loading/CircleLoading/CircleLoading';

export default function CreatedDiary({ title, date, content, id }) {
  const navigate = useNavigate();
  const [feeling, setFeeling] = useRecoilState(diaryFeeling);
  const isFeeling = feeling !== 'NONE' && feeling !== '';
  const [image, setImage] = useRecoilState(diaryImage);
  const isImage = image !== null && image !== '';
  const postFeelingMutation = usePostFeeling();
  const postImageMutation = usePostAiImage();

  const requestFeeling = () => {
    const body = {
      diaryId: id,
    };
    postFeelingMutation.mutate(body, {
      onSuccess: (response) => {
        console.log(response.data.feeling);
        setFeeling(response.data.feeling);
        console.log(feeling);
        navigate('/emotionview');
      },
    });
  };

  const responseFeeling = () => {
    navigate('/emotionview');
  };

  const handleImage = () => {
    const body = {
      diaryId: id,
    };
    postImageMutation.mutate(body, {
      onSuccess: (response) => {
        const data = response.data;
        console.log(response);
        setImage(data.image_url);
      },
    });
  };

  if (postFeelingMutation.isPending) {
    return <Loading />;
  }

  return (
    <S.CreatedDiaryWrapper>

      <S.CreatedDiaryComponentWrapper>
        <S.DiaryTopTextWrapper>
          <S.DiaryTitle>{title}</S.DiaryTitle>

          <S.DiaryTopInfoWrapper>
            <S.DiaryDate>{date}</S.DiaryDate>
            <S.TodayEmotionBtnWrapper>
              <BtnShowFeeling handleClick={isFeeling ? responseFeeling : requestFeeling}>
                {isFeeling ? '오늘의 감정 보러가기' : '오늘의 감정 생성하기'}
              </BtnShowFeeling>
            </S.TodayEmotionBtnWrapper>
          </S.DiaryTopInfoWrapper>

          {isImage ? (
            <S.DiaryPhoto src={image} />
          ) : (
            <S.PhotoBtnWrapper onClick={handleImage}>
              {postImageMutation.isPending ? 
                <CircleLoading>
                  이미지를 생성 중입니다.
                </CircleLoading>
              :
                <S.BtnImage src={createImgBtn} />
              }
            </S.PhotoBtnWrapper>
          )}


        </S.DiaryTopTextWrapper>

        <S.DiaryTextWrapper>
          <S.DiaryText>
            {content.split('\\n').map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </S.DiaryText>
        </S.DiaryTextWrapper>
      </S.CreatedDiaryComponentWrapper>
    </S.CreatedDiaryWrapper>
  );
}
