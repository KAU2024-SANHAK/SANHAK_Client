import styled from 'styled-components'
import SvgIcAddImage from '../../assets/svg/IcAddImage';

//배경색상은 #28 merge 후 진행하겠습니다!
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
    backdrop-filter: blur(1.5rem);
`
export const TitleInput = styled.input`
    ${({ theme }) => theme.fonts.body_08};
    background: ${({ theme }) => theme.colors.normal.white};
    width: 31.5rem;
    height: 7rem;
    border-radius: 3rem;
    backdrop-filter: blur(1.5rem);

    outline: none;
    border: none;
    margin-top: 2.2rem;
    padding-left: 3.1rem;

    &::placeholder{
        ${({ theme }) => theme.fonts.body_08};
        color: ${({ theme }) => theme.colors.gray.text_gray};
        letter-spacing: -0.0408rem;
        text-decoration-line: underline;
    }
`
export const ContentInput = styled.textarea`
    ${({ theme }) => theme.fonts.body_10};
    background: ${({ theme }) => theme.colors.normal.white};
    width: 31.5rem;
    height: 27rem;
    border-radius: 3rem;
    backdrop-filter: blur(1.5rem);

    outline: none;
    border: none;
    margin-top: 0.8rem;
    padding-left: 3.1rem;
    padding-top: 3.3rem;
    padding-right: 2rem;

    &::placeholder{
        ${({ theme }) => theme.fonts.body_10};
        color: ${({ theme }) => theme.colors.gray.text_gray};
        letter-spacing: -0.0408rem;
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
    ${({ theme }) => theme.fonts.body_10};
    color: ${({ theme }) => theme.colors.gray.text_gray};
    letter-spacing: -0.0408rem;
    
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