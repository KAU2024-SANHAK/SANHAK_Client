import * as S from './SlowDiary.style'
import { useState } from 'react';
import { useModal } from '../../hooks/common/useModal';
import { useFileReader } from '../../hooks/common/useFileReader';
import { useNavigate } from 'react-router-dom';
import { diaryImage, diaryContent, diaryTitle, diaryId } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';
import usePostSlowDiary from '../../hooks/queries/slowdiary/usePostSlowDiary';
import BtnHome from '../../components/common/buttons/Home/BtnHome';
import BtnNext from '../../components/common/buttons/Next/BtnNext';
import HomeModal from '../../components/Modal/HomeModal';

export default function SlowDiary(){
    const date = new Date();
    const today = date.getDate();
    const formData = new FormData();
    const navigate = useNavigate();
    const [isOpen, openModal, closeModal] = useModal();
    const mutation = usePostSlowDiary();
    const readData = useFileReader();
    const [image, setImage] = useRecoilState(diaryImage);
    const [title, setTitle] = useRecoilState(diaryTitle);
    const [content, setContent] = useRecoilState(diaryContent);
    const [id, setId] = useRecoilState(diaryId);

    const [data, setData] = useState({
        imageurl: '',
        diaryTitle: '',
        diaryContent: ''
    });
    const [file, setFile] = useState('');
    
    const blobTitle = new Blob([JSON.stringify(data.diaryTitle)],{
        type: 'application/json',
    });        
    const blobContent = new Blob([JSON.stringify(data.diaryContent)],{
        type: 'application/json',
    });
    
    const deleteQuotes = (text) => {
        return text.substring(1, text.length-1);
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

    const handleSubmit = () => {
        formData.append('imageurl', file);
        formData.append('diaryTitle',blobTitle);
        formData.append('diaryContent',blobContent);

        mutation.mutate(formData, {
            onSuccess: (response) => {
                const data = response.data;
                setImage(data.imageurl);
                setContent(deleteQuotes(data.diaryContent));
                setTitle(deleteQuotes(data.diaryTitle));
                setId(data.diaryId);
                navigate('/diaryview');
            }
        });
        
    };

    return(
        <S.SlowDiaryPageWrapper  $isEven = {today%2}>
            {isOpen && <HomeModal closeModal = {closeModal} />}

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