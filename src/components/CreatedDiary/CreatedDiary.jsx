import * as S from './CreatedDiary.style';
import { useNavigate } from 'react-router-dom';
import BtnBack from '../common/buttons/Back/BtnBack';
import { useRecoilState, useRecoilValue } from 'recoil';
import { diaryFeeling, diaryImage } from '../../recoil/atoms';
import { diaryId } from '../../recoil/atoms';
import usePostFeeling from '../../hooks/queries/create/usePostFeeling';
import usePostAiImage from '../../hooks/queries/create/usePostAiImage';
import useResetDiary from '../../hooks/diary/useResetDiaryAtom';
import BtnShowFeeling from '../common/buttons/ShowFeeling/BtnShowFeeling';
import Loading from '../../pages/Loading/Loading';
import CircleLoading from '../Loading/CircleLoading/CircleLoading';


export default function CreatedDiary({ title, date, content, id, image }) {
  const navigate = useNavigate();
  const [img, setImg] = useRecoilState(diaryImage);
  const [feeling, setFeeling] = useRecoilState(diaryFeeling);
  const isFeeling = feeling !== 'NONE' && feeling !== '';
  const postFeelingMutation = usePostFeeling();
  const postImageMutation = usePostAiImage();
  const {resetAdvice, resetContent, resetTitle, resetFeeling, resetId, resetImage} = useResetDiary();

  const requestFeeling = () => {
    const body = {
      diaryId: id,
    };
    postFeelingMutation.mutate(body, {
      onSuccess: (response) => {
        console.log(response.data.feeling)
        setFeeling(response.data.feeling);
        console.log(feeling)
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
    postImageMutation.mutate(body,{
      onSuccess: (response) => {
        const data = response.data;
        console.log(response);
        setImg(data.image_url);
      }
    })
  };

  if(postFeelingMutation.isPending){
    return <Loading />
  }
  return (
    <S.CreatedDiaryWrapper>
      <button
        onClick={() => {
          handleImage();
        }}
      >
        일기 생성 버튼
      </button>
      <S.HeaderWrapper>
        <S.BtnBackWrapper>
          <BtnBack handleClick={handleBack} />
        </S.BtnBackWrapper>
        <S.TodayEmotionBtnWrapper>
          <BtnShowFeeling handleClick={isFeeling ? responseFeeling : requestFeeling}>
            {isFeeling ? '오늘의 감정 보러가기' : '오늘의 감정 생성하기'}
          </BtnShowFeeling>
        </S.TodayEmotionBtnWrapper>
      </S.HeaderWrapper>

      <S.CreatedDiaryComponentWrapper>
        <S.DiaryTopTextWrapper>
          <S.DiaryTitle>{title}</S.DiaryTitle>
          <S.DiaryDate>{date}</S.DiaryDate>
        </S.DiaryTopTextWrapper>

        {
          postImageMutation.isPending ? 
          <CircleLoading>
            AI 이미지를 생성 중입니다.
          </CircleLoading>
          :
          <S.DiaryPhoto 
            src={img} 
          /> 
        }

        <S.DiaryTextWrapper>
          <S.DiaryText>
            {
              content.split('\\n').map( (line, idx) => {
                return (<span key={idx}>{line}<br/></span>)
              })
            }
          </S.DiaryText>
        </S.DiaryTextWrapper>
      </S.CreatedDiaryComponentWrapper>
    </S.CreatedDiaryWrapper>
  );
}
