import styled from 'styled-components'
import SvgIcAddImage from '../../assets/svg/IcAddImage';

//여기 100vh 설정했는데 깨져서... 일단 px로 설정해두었습니다.
export const SlowDiaryPageWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 92.2rem;
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
    width: 6rem;
    height: 8.5rem;
    flex-shrink: 0;
    border-radius: 3rem;
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
    width: 31.5rem;
    height: 31.5rem;
    border-radius: 3rem;
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(15px);
`
export const TitleInput = styled.input`
    width: 31.5rem;
    height: 7rem;
    border-radius: 3rem;
    background: #FFF;
    backdrop-filter: blur(15px);

    outline: none;
    border: none;
    margin-top: 2.2rem;

    &::placeholder{
        color: #8E8E8E;
        font-family: "Istok Web";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 3rem; /* 200% */
        letter-spacing: -0.408px;
        text-decoration-line: underline;
    }
`
export const ContentInput = styled.textarea`
    width: 31.5rem;
    height: 27rem;
    border-radius: 3rem;
    background: #FFF;
    backdrop-filter: blur(15px);

    outline: none;
    border: none;
    margin-top: 0.8rem;

    &::placeholder{
        color: #8E8E8E;
        font-family: "Istok Web";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 3rem; /* 200% */
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
    width: 6rem;
    height: 6rem;
    flex-shrink: 0;
    border-radius: 3rem;
    background: #FFF;
    margin-top: 1.8rem;
    margin-right: 2.5rem;
`
export const Caption =styled.p`
    color: #8E8E8E;
    font-family: "Istok Web";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3rem; /* 250% */
    letter-spacing: -0.408px;
    
    margin-bottom: 0.5rem;
    margin-top: 7rem;
`
export const PreviewImg = styled.img`
    width: 31.5rem;
    height: 31.5rem;
    border-radius: 3rem;
`

export const AddImg = styled(SvgIcAddImage)`
    display: flex;
`