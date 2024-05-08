import styled from 'styled-components';
import theme from '../../../styles/theme';

export const DiaryListComponentWrapper = styled.div`
    display: flex;
    width: 32.0rem;
    height: 11.5rem;
    flex-shrink: 0;
    border-radius: 3rem;
    background: white;
    // theme colors 적용이 안되는 것 같아요... 왜이러지
    // ${({ theme }) => theme.colors.normal.white};
    margin-bottom: 0.8rem;
`
export const Image = styled.div`
    display: flex;
    margin-left: 1.2rem;
    margin-top: 1rem;
    width: 9.5rem;
    height: 9.5rem;
    flex-shrink: 0;
    border-radius: 3rem;
    background: #C7C7C7;
`
export const TextWrapper = styled.div`
    margin-left: 1.2rem;
    margin-top: 1.8rem;
    gap: 0rem;
`
export const TextTitle = styled.p`
    ${({ theme }) => theme.fonts.body_02};
`
export const TextDate = styled.p`
    ${({ theme }) => theme.fonts.caption_02};
`
export const SubmitBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 18.5rem;
    height: 4rem;
    flex-shrink: 0;
    border-radius: 3rem;
    background: var(--Red-Pink, #FF5959);
    margin-top: 0.3rem;
`
export const SubmitBtnTextWrapper = styled.p`
    ${({ theme }) => theme.fonts.body_02};
`