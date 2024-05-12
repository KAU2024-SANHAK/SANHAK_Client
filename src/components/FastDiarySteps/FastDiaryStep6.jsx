import * as S from './FastDiaryStep.style';
import { useRecoilState } from 'recoil';
import { realizedKeyword, diaryContent, diaryFeeling, diaryImage, diaryTitle, diaryId, createdDate } from '../../recoil/atoms';
import { useKeywordNullCheck } from '../../hooks/useKeywordNullCheck';
import { useModal } from '../../hooks/common/useModal';
import { usePostKeywords } from '../../hooks/queries/fastdiary/usePostKeywords';
import { keywords } from '../../utils/keyword';
import LargeQuestion from './Questions/LargeQustion';
import BtnNext from '../common/buttons/Next/BtnNext';
import BtnPrev from '../common/buttons/Prev/BtnPrev';
import DiaryErrorModal from '../Modal/DiaryErrorModal';
import Loading from '../../pages/Loading/Loading';

export default function FastDiaryStep6({ onNext, onPrev }) {
  const [realized, setRealized] = useRecoilState(realizedKeyword);
  const [isOpen, openModal, closeModal] = useModal();
  const { mutation } = usePostKeywords();
  const [date, setDate] = useRecoilState(createdDate);
  const [id, setId] = useRecoilState(diaryId);
  const [title, setTitle] = useRecoilState(diaryTitle);
  const [content, setContent] = useRecoilState(diaryContent);
  const [image, setImage] = useRecoilState(diaryImage);
  const [feeling, setFeeling] = useRecoilState(diaryFeeling);
  const diaryKeywords = keywords();
  const checkNull = useKeywordNullCheck();

  const handleChange = (event) => {
    setRealized(event.target.value);
  };

  const handleDate = (data) => {
    const date = new Date(data);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const newDate = `${year}년 ${month}월 ${day}일`;
    
    data = newDate;
    
    return data;
  };

  const onClickSubmit = async () => {
    console.log(checkNull);
    {
      checkNull === true
        ? openModal()
        : mutation.mutate(diaryKeywords, {
            onSuccess: (response) => {
              const data = response.data;
              setImage(data.imageurl)
              setId(data.diaryId);
              setContent(data.diaryContent);
              setTitle(data.title);
              setDate(handleDate(data.writed_at));
              setFeeling(diaryKeywords.feeling);
              onNext();
            },
            
          });
    }
  };
  if(mutation.isPending){
    return <Loading />;
  }
  return (
    <S.FastDiaryStepWrapper>
       
      {isOpen && 
        <DiaryErrorModal 
          closeModal={closeModal} 
        >
          모든 질문에 답변해주세요.
        </DiaryErrorModal>
      }
      <LargeQuestion>
        하루를 돌아보면서
        <br />
        느꼈던 것들이 있다면 말해줄래?
      </LargeQuestion>

      <S.FastDiaryTextAreaWrapper>
        <S.InputArea
          name='realized'
          type='text'
          placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!'
          value={realized}
          onChange={handleChange}
        />
      </S.FastDiaryTextAreaWrapper>

      <S.ButtonField>
        <BtnPrev onPrev={onPrev} />
        <BtnNext
          onNext={() => {
            onClickSubmit();
          }}
        />
      </S.ButtonField>
    </S.FastDiaryStepWrapper>
  );
}
