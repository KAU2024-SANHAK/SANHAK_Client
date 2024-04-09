import styled from "styled-components";

export const Wrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({justify:'center'})};
    gap: 0.5rem;  
    `