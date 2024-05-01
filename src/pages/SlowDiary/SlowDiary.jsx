import * as S from './SlowDiary.style'
import { useState } from 'react';
import { useModal } from '../../hooks/common/useModal';
import { useFileReader } from '../../hooks/common/useFileReader';
import { useNavigate } from 'react-router-dom';
import  usePostSlowDiary  from '../../hooks/queries/slowdiary/usePostSlowDiary'
import BtnHome from '../../components/common/buttons/Home/BtnHome';
import BtnNext from '../../components/common/buttons/Next/BtnNext';
import HomeModal from '../../components/Modal/HomeModal';

export default function SlowDiary(){
    const date = new Date();
    const today = date.getDate();
    const navigate = useNavigate();
    const formData = new FormData();
    const [isOpen, openModal, closeModal] = useModal();
    const { mutation } = usePostSlowDiary();
    const readData = useFileReader();

    const [data, setData] = useState({
        imageUrl: '',
        diaryTitle: '',
        diaryContent: ''
    })

    const handleSubmit=()=>{
        //api 연결
        formData.append('diaryTitle', data.diaryTitle);
        formData.append('diaryContent', data.diaryContent);
        alert('저장!');
        console.log(data);
    }

    const handleChange=(event)=>{
        setData({...data, [event.target.name] : event.target.value})
    }

    const handleImage= (event)=>{
        const file = event.target.files[0];
       // setData({...data, [event.target.name]: file});
        formData.append('imageUrl', file);
        console.log(file);
        readData(file, (imageFile) => {
            setData({...data, [event.target.name]: imageFile});
        })
    }

    const handleNext=()=>{
        navigate('/diaryview')
    }

    return(
        <S.SlowDiaryPageWrapper  $isEven = {today%2}>
            {isOpen && <HomeModal closeModal = {closeModal}/>}

            <S.SlowDiaryHeader>
                <BtnHome onClick={()=>{openModal()}}/>       
                <S.Caption>
                사진을 첨부하려면 + 버튼을 누르세요.
                </S.Caption>
            </S.SlowDiaryHeader>

            <S.FormWrapper onSubmit={handleSubmit}>
                <S.ImageInput type='file' id ='imgInput' accept='image/*' name='imageUrl' onChange={handleImage}/>
                <S.Label htmlFor='imgInput'>
                    {data.imageUrl ? (
                        <S.PreviewImg src={data.imageUrl}/>
                    ): 
                        <S.AddImg/>
                    }
                </S.Label>
                <S.TitleInput type='text' placeholder='제목을 입력해주세요.' name='diaryTitle' value={data.diaryTitle} onChange={handleChange}/>
                <S.ContentInput type='text' placeholder='오늘 무슨 일이 있었나요? 자유롭게 적어주세요.' name='diaryContent' value={data.diaryContent} onChange={handleChange}/>

                <S.BtnField>
                    <BtnNext onNext={()=>{handleNext()
                    handleSubmit()
                    }}/>
                </S.BtnField>
            </S.FormWrapper>

        </S.SlowDiaryPageWrapper>
    )   
}