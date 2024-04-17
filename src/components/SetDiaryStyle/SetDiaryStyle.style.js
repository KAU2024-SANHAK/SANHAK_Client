import styled from "styled-components";

export const Wrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
    border-radius: 25px;
    background: rgba(255, 255, 255, ${(props)=>(props.$transparency)});
    height: 199px;
    width: 320px;
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
    
`
export const BtnWrapper = styled.button`
border: none;
background-color: transparent; 
margin: 1rem;
`