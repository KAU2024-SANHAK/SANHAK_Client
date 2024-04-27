import styled from 'styled-components'

export const DiaryViewPageWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    width: 100%;
    height: 154.5vh;
    background: linear-gradient(187deg, #FFBBCB 20.43%, #FFDAE3 81.25%, #DCC6CC 100.45%, #999 100.45%);
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