import styled from 'styled-components'

export const FeelingHiveWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({justify: 'space-between', align:'center'})};
    width: 26rem;
    margin-bottom: 12.6rem;
    margin-right: 3rem;
`
export const FirstLayer= styled.div`
    width: 7rem;
    height: 10rem;
    margin: auto;
`
export const SecondLayer= styled.div`
    width: 7rem;
    height: 18.3rem;
    margin: auto;
`
export const ThirdLayer= styled.div`
    width: 7rem;
    height: 10rem;
    margin: auto;
`
export const HoneyPotWrapper = styled.div`
    padding-left: 0.4rem;
    margin-top: 1rem;
    
`