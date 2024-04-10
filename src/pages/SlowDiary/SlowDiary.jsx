import * as S from './SlowDiary.style'

export default function SlowDiary(){
    const date = new Date();
    const today = date.getDate();

    return(
        <S.SlowDiaryPageWrapper  $isEven = {today%2}>
            <S.Header>
                <S.BtnHome/>
                <S.Caption>
                사진을 첨부하려면 + 버튼을 누르세요.
                </S.Caption>
            </S.Header>

            <S.FormWrapper>
                <S.ImageInput type='file' id ='imgInput' accept='image/*'/>
                <S.Label htmlFor='imgInput'/>
                <S.TitleInput type='text' placeholder='제목을 입력해주세요.'/>
                <S.ContentInput type='text' placeholder='오늘 무슨 일이 있었나요? 자유롭게 적어주세요.'/>

                <S.BtnField>
                    <S.BtnSubmit/>
                </S.BtnField>
            </S.FormWrapper>



        </S.SlowDiaryPageWrapper>
    )   
}