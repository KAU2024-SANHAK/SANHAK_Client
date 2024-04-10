import * as S from './SlowDiary.style'
import { useEffect, useState } from 'react';

export default function SlowDiary(){
    const date = new Date();
    const today = date.getDate();

    const [data, setData] = useState({
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


    return(
        <S.SlowDiaryPageWrapper  $isEven = {today%2}>
            <S.Header>
                <S.BtnHome/>
                <S.Caption>
                사진을 첨부하려면 + 버튼을 누르세요.
                </S.Caption>
            </S.Header>

            <S.FormWrapper onSubmit={handleSubmit}>
                <S.ImageInput type='file' id ='imgInput' accept='image/*' name='image' value={data.image}/>
                <S.Label htmlFor='imgInput'/>
                <S.TitleInput type='text' placeholder='제목을 입력해주세요.' name='title' value={data.title} onChange={handleChange} />
                <S.ContentInput type='text' placeholder='오늘 무슨 일이 있었나요? 자유롭게 적어주세요.' name='content' value={data.content} onChange={handleChange}/>

                <S.BtnField>
                    <S.BtnSubmit/>
                </S.BtnField>
            </S.FormWrapper>



        </S.SlowDiaryPageWrapper>
    )   
}