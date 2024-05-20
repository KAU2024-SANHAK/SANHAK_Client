import styled from 'styled-components'

export const DiaryListWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-color: ${({ theme }) => theme.colors.pink.white_pink};
    width: 100%;
`
export const BackButtonWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    width: 32rem;
    margin-top: 3.2rem;
`
export const DiaryListComponentWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    margin: 2.8rem 0 4.4rem 0;
    gap: 0.8rem;
`
export const BackgroundAddition = styled.div`
    width: 32.0rem;
    height: 11.5rem;
`