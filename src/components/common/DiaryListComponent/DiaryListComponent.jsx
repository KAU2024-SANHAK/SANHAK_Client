import * as S from "./DiaryListComponent.style";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { diaryContent, diaryAdvice, diaryTitle, diaryImage, diaryFeeling, createdDate, diaryId } from "../../../recoil/atoms";
import usePostDiary from "../../../hooks/queries/etc/usePostDiary";
import BtnSubmit from "../buttons/Submit/BtnSubmit";

export default function DiaryListComponent({ feelingListId, feelingListTitle, feelingListDate, imageUrl }) {
  const [content, setContent] = useRecoilState(diaryContent);
  const [advice, setAdvice] = useRecoilState(diaryAdvice);
  const [title, settitle] = useRecoilState(diaryTitle);
  const [image, setImage] = useRecoilState(diaryImage);
  const [feeling, setFeeling] = useRecoilState(diaryFeeling);
  const [date, setDate] = useRecoilState(createdDate);
  const [id, setId] = useRecoilState(diaryId);

  const mutation = usePostDiary();
  const navigate = useNavigate();

  const parseString =(text) =>{
    text = text.replace(/\\n/g, '\n');
    
    if(text[0] === '"'){
      return text.substring(1, text.length-1);
    }else{
      return text;
    }
  };

  const handleSearchButton= () => {
    const body = {
      diaryId: feelingListId, 
    };

    mutation.mutate(body,{
      onSuccess: (response) => {
        const data = response.data;
        console.log(response);
        setAdvice(data.advice);
        setContent(parseString(data.diary_content));
        setDate(feelingListDate);
        setFeeling(data.feeling);
        setImage(data.imageUrl);
        settitle(parseString(data.diaryTitle));
        setId(data.diaryId);
        navigate('/diaryview');
      }

    });
  };

  return (
    <S.DiaryListComponentWrapper>
      <S.PreviewImage src={imageUrl}/>
      
      <S.TextWrapper>
        <S.TitleText>
          {feelingListTitle}
        </S.TitleText>
        <S.DateText>
          {feelingListDate}
        </S.DateText>

        <S.MotionButton // 이거 스타일드컴포넌트로 묶기
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }} // 클릭 애니메이션을 더 극적으로
          transition={{ duration: 0.3 }}
        >
          <BtnSubmit
            onClick = {() => {
              handleSearchButton();
            }}
            width = '18.5rem'
            height = '4rem'
            $color={({ theme }) => theme.colors.pink.red_pink}
          >
            조회하기
          </BtnSubmit>
        </S.MotionButton>
      </S.TextWrapper>
    </S.DiaryListComponentWrapper>
  )
}
