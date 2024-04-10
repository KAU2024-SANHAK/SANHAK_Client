import { useEffect, useState } from 'react';
import * as S from './SlowDiary.style'
import SvgIcAddImage from '../../assets/svg/IcAddImage';

export default function SlowDiary(){
    const date = new Date();
    const today = date.getDate();

    const [data, setData] = useState({
        image: '',
        title: ' ',
        content: ' '
    })

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert('저장!');
        console.log(data);
    }

    const handleChange=(event)=>{
        setData({...data, [event.target.name] : event.target.value})
    }

    //이미지 변환 부분이 조금 어렵네요 ㅠㅠ,,,.,
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

            <S.Header>
                <S.BtnHome/>            
                <S.Caption>
                사진을 첨부하려면 + 버튼을 누르세요.
                </S.Caption>
            </S.Header>

            <S.FormWrapper onSubmit={handleSubmit}>
                <S.ImageInput type='file' id ='imgInput' accept='image/*' name='image'  onChange={handleImage}/>
                <S.Label htmlFor='imgInput'>
                    {data.image ? (
                        <S.PreviewImg src={data.image} alt='preview'/>
                    ): 
                        <S.AddImg/>
                    }
                </S.Label>
                <S.TitleInput type='text' placeholder='제목을 입력해주세요.' name='title' value={data.title} onChange={handleChange} />
                <S.ContentInput type='text' placeholder='오늘 무슨 일이 있었나요? 자유롭게 적어주세요.' name='content' value={data.content} onChange={handleChange}/>

                <S.BtnField>
                    <S.BtnSubmit/>
                </S.BtnField>
            </S.FormWrapper>

        </S.SlowDiaryPageWrapper>
    )   
}