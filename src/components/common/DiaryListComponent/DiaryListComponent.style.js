import styled from 'styled-components';

export const DiaryListWrapper = styled.div`
    display: flex;
    width: 32.0rem;
    height: 11.5rem;
    flex-shrink: 0;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.70);
    backdrop-filter: blur(5px);
    margin-bottom: 5rem;
`
export const DiaryPhoto = styled.div`
    display: flex;
    margin-left: 1.2rem;
    margin-top: 1rem;
    width: 9.5rem;
    height: 9.5rem;
    flex-shrink: 0;
    border-radius: 30px;
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
export const BtnSubmitWrapper = styled.div`
`