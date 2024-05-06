import styled from 'styled-components'

export const DiaryViewPageWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    // ${({ theme }) => theme.colors.gradient.gradient_pink};
    background: lightpink;
    // padding-bottom: 20.2rem;
`
export const Filter = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    background: rgba(255, 255, 255, 0.50);
`
export const CreatedDiaryWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
`

export const GoToReplyBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    margin-bottom: 1.2rem;
`

export const CloseBtn = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: black;
    position: fixed;
    top: 25.8rem;
    right: 3rem;
`
export const PopUpWrapper = styled.div`
    width: 100vh;
    height: 100vh;
    position: fixed;
    bottom: 0rem;
    left: 0rem;
`
