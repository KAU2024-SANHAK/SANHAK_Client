import styled from 'styled-components'

export const DiaryListWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-color: ${({ theme }) => theme.colors.pink.white_pink};
    width: 100%;
    height: 100vh;
`
export const BackButtonWrapper = styled.div`
    position: absolute;
    top: 2rem;
    left: 2.8rem;
`
export const DiaryListComponentWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position:absolute;
    top: 14.5rem;
    padding: 0rem 0rem 4.4rem 0rem;
    background-color: ${({ theme }) => theme.colors.pink.white_pink};
    width:100%
`