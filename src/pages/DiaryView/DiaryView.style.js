import styled from 'styled-components'

export const DiaryViewPageWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    // ${({ theme }) => theme.colors.gradient.gradient_pink};
    background: pink;
    // background: rgba(255, 255, 255, 0.50);
    // backdrop-filter: blur(15px);
    padding-bottom: 20.2rem;
`
export const DiaryViewFilter = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    width: 100%;
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(15px);
`
export const GoToReplyBtnWrapper = styled.div`

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
export const CreatedDiaryWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
`