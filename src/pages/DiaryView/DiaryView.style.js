import styled from 'styled-components'
import { IcHoneyBear } from "../../assets/svg";
import { IcXBtn } from '../../assets/svg';

export const DiaryViewPageWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-color: ${({ theme }) => theme.colors.pink.white_pink};
    width: 100%;
    min-height: 100vh;
    height: auto;
    max-height: fit-content;
    justify-content: space-between;
`
export const CreatedDiaryWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
`

export const GoToReplyBtnWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    margin-bottom: 1.2rem;
`

export const CloseBtn = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
    background: white;
    position: absolute;
    top: 17rem;
    left: 31.6rem;
`
export const XBtn = styled(IcXBtn)`

`
export const PopUpWrapper = styled.div`
    position: fixed;
    bottom: 57.5rem;
    margin-right: 37.5rem;
`
export const HoneyBearWrapper = styled.div`
    position: fixed;
    top: 12.5rem;
    left: -12.5rem;
`
export const HoneyBear = styled(IcHoneyBear)`
    display: flex;
`