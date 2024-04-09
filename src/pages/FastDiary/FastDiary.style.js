import styled from 'styled-components'
//background: linear-gradient(187deg, #FFE768 20.43%, #FFF3B7 84.05%);
//linear-gradient(187deg, #FFBBCB 20.43%, #FFDAE3 81.25%, #DCC6CC 100.45%, #999 100.45%)
export const FastDairyPageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: ${(props) => (props.isEven === 0 ? 'linear-gradient(187deg, #FFBBCB 20.43%, #FFDAE3 81.25%, #DCC6CC 100.45%, #999 100.45%)'
    : 'linear-gradient(187deg, #FFE768 20.43%, #FFF3B7 84.05%)'
    )};
`
export const WritingForm = styled.form`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 431px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(15px);
`