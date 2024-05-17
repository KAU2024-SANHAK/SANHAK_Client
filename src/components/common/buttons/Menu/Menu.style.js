import styled from "styled-components";
import { IcMenu } from "../../../../assets/svg";

export const ButtonWrapper =styled.div`
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
    height: 10rem;
    background-color: white;
    border-radius: 3rem;
    position: absolute;
    right: 2.7rem;
    top: 10rem;
`
export const EditBtn = styled.button`
    ${({ theme }) => theme.fonts.body_02};
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: transparent;
`
export const DeleteBtn = styled.button`
    ${({ theme }) => theme.fonts.body_02};
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: transparent;
`