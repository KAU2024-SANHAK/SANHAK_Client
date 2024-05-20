import * as S from './CreatedDiary.style';
import { useNavigate } from 'react-router-dom';
import BtnBack from '../common/buttons/Back/BtnBack';
import { useRecoilState } from 'recoil';
import { diaryFeeling, diaryImage } from '../../recoil/atoms';
import usePostFeeling from '../../hooks/queries/create/usePostFeeling';
import usePostAiImage from '../../hooks/queries/create/usePostAiImage';
import useResetDiary from '../../hooks/diary/useResetDiaryAtom';
import BtnShowFeeling from '../common/buttons/ShowFeeling/BtnShowFeeling';
import Loading from '../../pages/Loading/Loading';
import Menu from '../common/buttons/Menu/Menu';
import Share from '../common/buttons/Share/Share';
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
  const { resetAdvice, resetContent, resetTitle, resetFeeling, resetId, resetImage } = useResetDiary();

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

  const handleBack = () => {
    resetAdvice();
    resetContent();
    resetTitle();
    resetFeeling();
    resetId();
    resetImage();
    navigate('/main');
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

  if (postFeelingMutation.isPending || postImageMutation.isPending) {
    return <Loading />;
  }

  return (
    <S.CreatedDiaryWrapper>
      <S.HeaderWrapper>
        <S.BtnBackWrapper>
          <BtnBack handleClick={handleBack} />
        </S.BtnBackWrapper>
        <S.ExtraBtnWrapper>
          <Share title={title} image={image} />
          <Menu />
        </S.ExtraBtnWrapper>
      </S.HeaderWrapper>

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
            <S.PhotoBtnWrapper onClick={() => handleImage()}>
              <S.BtnImage src={createImgBtn} />
            </S.PhotoBtnWrapper>
          )}
          {postImageMutation.isPending && (
            <CircleLoading>AI 이미지를 생성 중입니다.</CircleLoading>
          )}
        </S.DiaryTopTextWrapper>

        <S.DiaryTextWrapper>
          <S.DiaryText>
            {content.split('\\n').map((line, idx) => {
              return (<span key={idx}>{line}<br/></span>);
            })}
          </S.DiaryText>
        </S.DiaryTextWrapper>
      </S.CreatedDiaryComponentWrapper>
    </S.CreatedDiaryWrapper>
  );
}
