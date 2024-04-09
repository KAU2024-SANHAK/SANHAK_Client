import styled from "styled-components";

export const Wrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.24);
    height: 199px;
    width: 320px;
    margin-bottom: 3rem;
    margin-top: 3rem;
    font-size: 2rem;
    text-align: center;
    
`