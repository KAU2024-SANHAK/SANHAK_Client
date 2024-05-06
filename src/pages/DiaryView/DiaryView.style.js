import styled from 'styled-components'

export const DiaryViewPageWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    width: 100%;
    // ${({ theme }) => theme.colors.gradient.gradient_pink};
    background: pink;
    // background: rgba(255, 255, 255, 0.50);
    // backdrop-filter: blur(15px);
`
export const DiaryViewFilter = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    width: 100%;
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(15px);
`
export const GoToReplyBtnWrapper = styled.div`
    position: absolute;
    bottom: 1.6rem;
    left: 11rem;
`