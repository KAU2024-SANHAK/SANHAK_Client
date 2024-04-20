import styled from 'styled-components'

export const DiaryViewPageWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 300vh;
    background: linear-gradient(187deg, #FFBBCB 20.43%, #FFDAE3 81.25%, #DCC6CC 100.45%, #999 100.45%);
`