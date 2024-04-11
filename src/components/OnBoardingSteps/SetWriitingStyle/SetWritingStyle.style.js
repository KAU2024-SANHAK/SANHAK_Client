import styled from "styled-components";

//여기 px rem으로 쓰면 뭔가 이상해서 흑흑,,,
export const Wrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.24);
    height: 199px;
    width: 320px;
    margin-bottom: 1rem;
    margin-top: 7rem;
    font-size: 2rem;
    text-align: center;
    
`
export const BtnWrapper = styled.button`
border: none;
background-color: transparent; 
margin: 1rem;
`