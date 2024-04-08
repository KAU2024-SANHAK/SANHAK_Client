import styled from "styled-components";

export const Wrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};

    height: 200px;
    width: 100%;
    margin-bottom: 3rem;
    margin-top: 3rem;
    font-size: 2rem;
    text-align: center;
    
`