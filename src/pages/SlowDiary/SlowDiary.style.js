import styled from 'styled-components'
import SvgIcAddImage from '../../assets/svg/IcAddImage';

export const SlowDiaryPageWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    min-height: 100vh;
    background: ${(props) => (props.$isEven === 0 ? 'linear-gradient(187deg, #FFBBCB 20.43%, #FFDAE3 81.25%, #DCC6CC 100.45%, #999 100.45%);'
    :'linear-gradient(187deg, #FFE768 20.43%, #FFF3B7 84.05%);'
    )};

`
export const SlowDiaryHeader = styled.div`
    width: 32rem;
    height: 16rem;
    padding-top: 4rem;
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
    -webkit-backdrop-filter: blur(1.5rem);
    -moz-backdrop-filter: blur(1.5rem);
    -o-backdrop-filter: blur(1.5rem);
    -ms-backdrop-filter: blur(1.5rem);
    backdrop-filter: blur(1.5rem);
`
export const TitleInput = styled.input`
    ${({ theme }) => theme.fonts.body_08};
    background: ${({ theme }) => theme.colors.normal.white};
    width: 31.5rem;
    height: 7rem;
    border-radius: 3rem;
    -webkit-backdrop-filter: blur(1.5rem);
    -moz-backdrop-filter: blur(1.5rem);
    -o-backdrop-filter: blur(1.5rem);
    -ms-backdrop-filter: blur(1.5rem);
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
    -webkit-backdrop-filter: blur(1.5rem);
    -moz-backdrop-filter: blur(1.5rem);
    -o-backdrop-filter: blur(1.5rem);
    -ms-backdrop-filter: blur(1.5rem);
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
export const BtnField = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({justify:'flex-end'})};
    width: 32rem;
    padding-top: 1.8rem;
    padding-bottom: 1rem;
`

export const Caption =styled.p`
    ${({ theme }) => theme.fonts.body_10};
    color: ${({ theme }) => theme.colors.gray.text_gray};
    letter-spacing: -0.0408rem;
    
    margin-bottom: 0.5rem;
    margin-left: 7.6rem;
    
`
export const PreviewImg = styled.img`
    width: 31.5rem;
    height: 31.5rem;
    border-radius: 3rem;
`

export const AddImg = styled(SvgIcAddImage)`
    display: flex;
`