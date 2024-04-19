import * as S from './SlowDiary.style'
import { useState } from 'react';
import { useModal } from '../../hooks/common/useModal';
import BtnHome from '../../components/common/buttons/Home/BtnHome';
import BtnNext from '../../components/common/buttons/Next/BtnNext';
import HomeModal from '../../components/Modal/HomeModal';

export default function SlowDiary(){
    const date = new Date();
    const today = date.getDate();
    const [isOpen, opneModal, closeModal] = useModal();

    const [data, setData] = useState({
        imageUrl: '',
        diaryTitle: '',
        diaryContent: ''
    })

    const handleSubmit=(event)=>{
        //api 연결
        event.preventDefault();
        alert('저장!');
        console.log(data);
    }

    const handleChange=(event)=>{
        setData({...data, [event.target.name] : event.target.value})
    }

    const handleImage=(event)=>{
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setData({...data, [event.target.name]: reader.result});
           };

    }

    return(
        <S.SlowDiaryPageWrapper  $isEven = {today%2}>
            {isOpen && <HomeModal closeModal = {closeModal}/>}

            <S.SlowDiaryHeader>
                <BtnHome onClick={()=>{opneModal()}}/>       
                <S.Caption>
                사진을 첨부하려면 + 버튼을 누르세요.
                </S.Caption>
            </S.SlowDiaryHeader>

            <S.FormWrapper onSubmit={handleSubmit}>
                <S.ImageInput type='file' id ='imgInput' accept='image/*' name='image'  onChange={handleImage}/>
                <S.Label htmlFor='imgInput'>
                    {data.image ? (
                        <S.PreviewImg src={data.imageUrl} alt='preview'/>
                    ): 
                        <S.AddImg/>
                    }
                </S.Label>
                <S.TitleInput type='text' placeholder='제목을 입력해주세요.' name='title' value={data.diaryTitle} onChange={handleChange}/>
                <S.ContentInput type='text' placeholder='오늘 무슨 일이 있었나요? 자유롭게 적어주세요.' name='content' value={data.diaryContent} onChange={handleChange}/>

                <S.BtnField>
                    <BtnNext/>
                </S.BtnField>
            </S.FormWrapper>

        </S.SlowDiaryPageWrapper>
    )   
}