import styled from 'styled-components'

//여기 100vh 설정했는데 깨져서... 일단 px로 설정해두었습니다.
export const SlowDiaryPageWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 922px;
    background: ${(props) => (props.$isEven === 0 ? 'linear-gradient(187deg, #FFBBCB 20.43%, #FFDAE3 81.25%, #DCC6CC 100.45%, #999 100.45%);'
    :'linear-gradient(187deg, #FFE768 20.43%, #FFF3B7 84.05%);'
    )};

`
export const Header = styled.div`
    width:100%;
    display: flex;

`
//merge 이후에 홈 컴포넌트로 수정하겠습니다.
export const BtnHome = styled.button`
    width: 60px;
    height: 85px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #FFF;
    margin-bottom: 1.3rem;
    margin-left: 2.8rem;
    margin-right: 0.7rem;
`
export const FormWrapper = styled.form`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
`
export const ImageInput = styled.input`
    display:none;

`
export const Label = styled.label`
    width: 315px;
    height: 315px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(15px);
`
export const TitleInput = styled.input`
    width: 315px;
    height: 70px;
    border-radius: 30px;
    background: #FFF;
    backdrop-filter: blur(15px);

    outline: none;
    border: none;
    margin-top: 2.2rem;

    &::placeholder{
        color: #8E8E8E;
        font-family: "Istok Web";
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 200% */
        letter-spacing: -0.408px;
        text-decoration-line: underline;
    }
`
export const ContentInput = styled.textarea`
    width: 315px;
    height: 270px;
    border-radius: 30px;
    background: #FFF;
    backdrop-filter: blur(15px);

    outline: none;
    border: none;
    margin-top: 0.8rem;

    &::placeholder{
        color: #8E8E8E;
        font-family: "Istok Web";
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 200% */
        letter-spacing: -0.408px;
        text-decoration-line: underline;
    }
`
//이것도 merge 이후 버튼 컴포넌트로 수정하겠습니다.
export const BtnField = styled.div`
    display: flex;    
    width: 100%;
    justify-content: flex-end;

`
export const BtnSubmit= styled.button`
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #FFF;
    margin-top: 1.8rem;
    margin-right: 2.5rem;
`
export const Caption =styled.p`
    color: #8E8E8E;
    font-family: "Istok Web";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 250% */
    letter-spacing: -0.408px;
    
    margin-bottom: 0.5rem;
    margin-top: 7rem;
`
export const PreviewImg = styled.img`
    width: 315px;
    height: 315px;
    border-radius: 30px;
`