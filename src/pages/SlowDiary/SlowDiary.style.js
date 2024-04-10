import styled from 'styled-components'

export const SlowDiaryPageWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height:100vh;
    background: ${(props) => (props.$isEven === 0 ? 'linear-gradient(187deg, #FFBBCB 20.43%, #FFDAE3 81.25%, #DCC6CC 100.45%, #999 100.45%);'
    :'linear-gradient(187deg, #FFE768 20.43%, #FFF3B7 84.05%);'
    )};

`