import styled from 'styled-components';

export const CreatedDiaryWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(15px);

`
export const BtnBackWrapper = styled.div`
    position: absolute;
    left: 2.8rem;
    top: 3.2rem;
`
export const TodeayEmotionBtnWrapper = styled.div`
    posiiton: absolute;
    right: 2.7rem;
    top: 6.8rem;
`
export const CreatedDiaryComponentWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    margin-top: 13.1rem;
    gap: 1.1rem;

`
export const DiaryTopTextWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};

`
export const DiaryTitle = styled.p`
    ${({ theme }) => theme.fonts.heading_01};
`
export const DiaryDate = styled.p`
    ${({ theme }) => theme.fonts.body_10};
`
export const DiaryPhotoWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 32rem;
    height: 31.4rem;
    flex-shrink: 0;
    border-radius: 30px;
    background: #FF8686;
`
export const DiaryTextWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 32rem;
    height: 23.5rem;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.49);
`
export const DiaryText = styled.p`
    ${({ theme }) => theme.fonts.body_02};
`