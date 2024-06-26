import * as S from './SlowDiary.style'
import { useState } from 'react';
import { useModal } from '../../hooks/common/useModal';
import { useFileReader } from '../../hooks/common/useFileReader';
import { useNavigate } from 'react-router-dom';
import { diaryImage, diaryContent, diaryTitle, diaryId, createdDate } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';
import usePostSlowDiary from '../../hooks/queries/slowdiary/usePostSlowDiary';
import usePatchDiary from '../../hooks/queries/slowdiary/usePatchDiary';
import BtnHome from '../../components/common/buttons/Home/BtnHome';
import BtnNext from '../../components/common/buttons/Next/BtnNext';
import OptionModal from '../../components/Modal/OptionModal';

export default function SlowDiary(){
  const date = new Date();
  const today = date.getDate();

  const formData = new FormData();
  const navigate = useNavigate();
  const [isOpen, openModal, closeModal] = useModal();
  const postMutation = usePostSlowDiary();
  const patchMutation = usePatchDiary();
  const readData = useFileReader();
  const [image, setImage] = useRecoilState(diaryImage);
  const [title, setTitle] = useRecoilState(diaryTitle);
  const [content, setContent] = useRecoilState(diaryContent);
  const [diaryDate, setDiaryDate] = useRecoilState(createdDate);
  const [id, setId] = useRecoilState(diaryId);

  const [data, setData] = useState({
    imageurl: image,
    diaryTitle: title,
    diaryContent: content,
  });

  const [file, setFile] = useState(null);
  
  const blobTitle = new Blob([JSON.stringify(data.diaryTitle)],{
    type: 'application/json',
  });        
  const blobContent = new Blob([JSON.stringify(data.diaryContent)],{
    type: 'application/json',
  });

  const parseString =(text) =>{
    text = text.replace(/\\n/g, '\n');
    return text.substring(1, text.length-1);
 };

 const handleDate = (text) => {
    const date = new Date(text);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const newDate = `${year}년 ${month}월 ${day}일`;
    
    text = newDate;

    return text;
  };

  const handleChange = (event) => {
    setData({...data, [event.target.name] : event.target.value});
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    
    readData(file, (imageFile) => {
      setData({...data, [event.target.name]: imageFile});
    })

    setFile(file);
  };
  console.log(data.diaryContent)

  const handleSubmit = () => {

    if(id === 0){
      formData.append('diaryTitle',blobTitle);
      formData.append('diaryContent',blobContent);
      formData.append('imageUrl', file);

      postMutation.mutate(formData, {
        onSuccess: (response) => {
          const data = response.data;

          setImage(data.imageUrl);
          setContent(parseString(data.diaryContent));
          setTitle(parseString(data.diaryTitle));
          setId(data.diaryId);
          setDiaryDate(handleDate(data.createdDate));
          navigate('/diaryview');
        }
      });
    }
    else{
      console.log('patch')
      !file ? formData.append('imageUrl', new Blob(), '')
      : formData.append('imageUrl', file);

      formData.append('diaryTitle', data.diaryTitle);
      formData.append('diaryContent', data.diaryContent);
      formData.append('diaryId', id);

      patchMutation.mutate(formData,{
        onSuccess: (response) => {
          const data = response.data;
          setImage(data.imageurl);
          setContent(data.diaryContent);
          setTitle(data.diaryTitle);
          setId(data.diaryId);
          navigate('/diaryview');
        }

      })         
    }
      
  };

  const handleGoMain=()=>{
    navigate('/main');
  };

  return(
    <S.SlowDiaryPageWrapper  $isEven = {today%2}>
      {isOpen && 
        <OptionModal 
        closeModal={closeModal} 
        handleOption={handleGoMain}
        optionText='홈으로 돌아가기'
        closeText='이어서 기록하기'
        >
          홈으로 되돌아가시겠습니까?
          <br />
          되돌아가면 글은 초기화됩니다.
        </OptionModal>  
      }
      <S.SlowDiaryHeader>
        <BtnHome
          onClick={() => {
            openModal()
          }} 
        />       
        <S.Caption>
          사진을 첨부하려면 + 버튼을 누르세요.
        </S.Caption>
      </S.SlowDiaryHeader>

      <S.FormWrapper onSubmit={handleSubmit}>
          <S.ImageInput 
            type = 'file' 
            id ='imgInput' 
            accept ='image/*' 
            name = 'imageurl' 
            onChange = {handleImage} />

          <S.Label htmlFor = 'imgInput'>
            {data.imageurl ? (
              <S.PreviewImg 
                src = {data.imageurl} 
              />
            ): 
              <S.AddImg />
            } 
          </S.Label>

          <S.TitleInput 
            type = 'text' 
            placeholder = '제목을 입력해주세요.' 
            name = 'diaryTitle' 
            value = {data.diaryTitle} 
            onChange = {handleChange}
          />
          <S.ContentInput 
            type = 'text' 
            placeholder = '오늘 무슨 일이 있었나요? 자유롭게 적어주세요.'
            name = 'diaryContent' 
            value = {data.diaryContent} 
            onChange = {handleChange}
          />
 
          <S.BtnField>
            <BtnNext onNext={() => {
              handleSubmit();
            }}/>
          </S.BtnField>
      </S.FormWrapper>
    </S.SlowDiaryPageWrapper>
  )   
}