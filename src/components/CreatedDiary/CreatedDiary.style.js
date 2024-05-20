import styled from 'styled-components';

export const CreatedDiaryWrapper = styled.div`
    width: 32rem;
    margin-bottom: 2.5rem;
`
export const HeaderWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    margin-top: 3.2rem;
    justify-content: space-between;
`
export const CreatComponentWrapper = styled.div`
    width: 100%;
    ${({ theme }) => theme.colors.gradient.gradient_pink};
`
export const BtnBackWrapper = styled.div`
`
export const CreatedDiaryComponentWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    gap: 1.1rem;
`
export const DiaryTopTextWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    margin-top: 1.1rem;
`
export const DiaryTitle = styled.p`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    ${({ theme }) => theme.fonts.heading_03};
    padding: 0.2rem 0.2rem 0 0.2rem;
`
export const DiaryTopInfoWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    width: 30rem;
    justify-content: space-between;
`
export const TodayEmotionBtnWrapper = styled.div`
`
export const DiaryDate = styled.p`
    ${({ theme }) => theme.fonts.body_10};
    margin-top: 1.2rem;
`
export const DiaryPhoto = styled.img`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 32rem;
    height: 31.4rem;
    flex-shrink: 0;
    border-radius: 30px;
    background: #FF8686;
`
export const PhotoBtnWrapper = styled.button`
    width: 32rem;
    height: 31.4rem;
    flex-shrink: 0;
    border-radius: 30px;
    background: #FF8686;
`
export const BtnImage = styled.img`
    height: 100.2%;
`
export const DiaryTextWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    width: 32rem;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.49);
    white-space: pre-line;

`
export const DiaryText = styled.p`
    ${({ theme }) => theme.fonts.body_02};
    
    display: flex;
    width: 27rem;
    margin-left: 2.5rem;
    margin-top: 4rem;
    margin-bottom: 4rem;    
    white-space: pre-line;
`
export const ExtraBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({direction:'row'})};
    background-color: transparent;
`
export const MenuWrapper = styled.div`
    width: 10rem;
    height: 8rem;
    background-color: white;

`
export const EditBtn = styled.button`
    ${({ theme }) => theme.fonts.body_02};
`
export const DeleteBtn = styled.button`
    ${({ theme }) => theme.fonts.body_02};
`