import {styled, css} from 'styled-components';
import SvgIcAddImage from '../../../assets/svg/IcAddImage';


const BackdropFilter = css`
  -webkit-backdrop-filter: blur(1.5rem);
  -moz-backdrop-filter: blur(1.5rem);
  -o-backdrop-filter: blur(1.5rem);
  -ms-backdrop-filter: blur(1.5rem);
  backdrop-filter: blur(1.5rem);
`;
const InputBaseStyle = css`
  background: ${({ theme }) => theme.colors.normal.white};
  border-radius: 3rem;
  outline: none;
  border: none;

  &::placeholder{
    color: ${({ theme }) => theme.colors.gray.text_gray};
    text-decoration-line: underline;
  };
`;

export const DiaryFormWrapper = styled.form`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
`;
export const ImageInput = styled.input`
  display:none;
`;
export const Label = styled.label`
  ${BackdropFilter};
  width: 31.5rem;
  height: 31.5rem;
  border-radius: 3rem;
`;
export const TitleInput = styled.input`
  ${BackdropFilter};
  ${InputBaseStyle};
  ${({ theme }) => theme.fonts.body_08};
  width: 31.5rem;
  height: 7rem;
  margin-top: 2.2rem;
  padding-left: 3.1rem;
`;
export const ContentInput = styled.textarea`
  ${BackdropFilter};
  ${InputBaseStyle};
  ${({ theme }) => theme.fonts.body_10};
  width: 31.5rem;
  height: 27rem;
  margin-top: 0.8rem;
  padding-left: 3.1rem;
  padding-top: 3.3rem;
  padding-right: 2rem;
`;
export const BtnField = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({justify:'flex-end'})};
  width: 32rem;
  padding-top: 1.8rem;
  padding-bottom: 1rem;
`;

export const PreviewImg = styled.img`
  width: 31.5rem;
  height: 31.5rem;
  border-radius: 3rem;
`;
export const AddImg = styled(SvgIcAddImage)`
  display: flex;
`;