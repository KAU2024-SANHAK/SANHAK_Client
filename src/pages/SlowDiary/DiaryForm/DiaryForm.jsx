import * as S from './DiaryForm.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { diaryImage, diaryContent, diaryTitle, diaryId, createdDate } from '../../../recoil/atoms';
import { useRecoilState } from 'recoil';
import useFileReader from '../../../hooks/common/useFileReader';
import usePostSlowDiary from '../../../hooks/queries/slowdiary/usePostSlowDiary';
import usePatchDiary from '../../../hooks/queries/slowdiary/usePatchDiary';
import BtnNext from '../../../components/common/buttons/Next/BtnNext';
import BtnCreateDiary from '../../../components/common/buttons/CreateDiary/BtnCreateDiary';

function DiaryForm () {

  const formData = new FormData();
  const navigate = useNavigate();
  const postMutation = usePostSlowDiary();
  const patchMutation = usePatchDiary();
  const readData = useFileReader();
  const [image, setImage] = useRecoilState(diaryImage);
  const [title, setTitle] = useRecoilState(diaryTitle);
  const [content, setContent] = useRecoilState(diaryContent);
  const [diaryDate, setDiaryDate] = useRecoilState(createdDate);
  const [id, setId] = useRecoilState(diaryId);

  const [values, setValues] = useState({
    imageurl: image,
    diaryTitle: title,
    diaryContent: content,
  });

  const [file, setFile] = useState(null);

  const handleDate = (text) => {
    const date = new Date(text);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formatedDate = `${year}년 ${month}월 ${day}일`;
    
    return formatedDate;
  };

  const handleChange = (event) => {
    setValues({...values, [event.target.name] : event.target.value});
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    
    readData(file, (imageFile) => {
      setValues({...values, [event.target.name]: imageFile});
    })

    setFile(file);
  };

  const handleSubmit = () => {
    !file ? formData.append('imageUrl', new Blob(), '')
    : formData.append('imageUrl', file);
    formData.append('diaryTitle', values.diaryTitle);
    formData.append('diaryContent', values.diaryContent);

    if(id === 0){
      postMutation.mutate(formData, {
        onSuccess: (response) => {
          const data = response.data;

          setImage(data.imageUrl);
          setContent(data.diaryContent);
          setTitle(data.diaryTitle);
          setId(data.diaryId);
          setDiaryDate(handleDate(data.createdDate));
          navigate('/diaryview');
        }
      });
    }
    else{
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
      });        
    }
  };

  return(
    <>
      <S.DiaryFormWrapper onSubmit={handleSubmit}>
          <S.ImageInput 
            type = 'file' 
            id ='imgInput' 
            accept ='image/*' 
            name = 'imageurl' 
            onChange = {handleImage} 
          />

          <S.Label htmlFor = 'imgInput'>
            {values.imageurl ? (
              <S.PreviewImg 
                src = {values.imageurl} 
              />
            ): 
              <S.AddImg />
            } 
          </S.Label>

          <S.TitleInput 
            type = 'text' 
            placeholder = '제목을 입력해주세요.' 
            name = 'diaryTitle' 
            value = {values.diaryTitle} 
            onChange = {handleChange}
          />
          <S.ContentInput 
            type = 'text' 
            placeholder = '오늘 무슨 일이 있었나요? 자유롭게 적어주세요.'
            name = 'diaryContent' 
            value = {values.diaryContent} 
            onChange = {handleChange}
          />
  
          <S.BtnField>
            <BtnCreateDiary onClick={handleSubmit}/>
          </S.BtnField>
      </S.DiaryFormWrapper>
    </>   
  );
}
export default DiaryForm;