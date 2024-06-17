import styled from "styled-components";
import { IcMenu } from "../../../../assets/svg";

export const ButtonWrapper =styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({justify: 'end'})};
    display: flex;
    background-color: transparent;
    margin: 0 1.2rem 0 1.2rem;
`
export const MenuBtn = styled(IcMenu)`
    display: flex;
`
export const MenuWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 13rem;
    background-color: white;
    border-radius: 3rem;
    position: absolute;
    top: 10rem;
`
export const EditBtn = styled.button`
    ${({ theme }) => theme.fonts.body_02};
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    margin: 0.5rem 1.7rem 0.5rem 1.7rem;
    background-color: transparent;
    color: black;
`
export const DeleteBtn = styled.button`
    ${({ theme }) => theme.fonts.body_02};
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    margin: 0.5rem 1.7rem 0.5rem 1.7rem;
    background-color: transparent;
    color: black;
`
export const ButtonField = styled.div`
    width: 37.5rem;
`