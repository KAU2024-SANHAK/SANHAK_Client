import styled from "styled-components";
import { IcPopUpSlide } from '../../assets/svg/index'

//전체 감싸는 부분. 크기랑 위치 하단 고정
export const PopUpWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: absolute;
    width: 37.5rem;
    height: 43.85rem;
    padding-top: 27.2rem;
`
//팝업창 제목 (마이페이지, 꿀비의 답장)
export const PopUpTitle=styled.div`
    ${({ theme }) => theme.fonts.heading_01};
    position: absolute;
    top: 17rem;
    font-weight: 700;
    letter-spacing: 0.0408rem;

`
//svg파일 
export const PopUpSlide = styled(IcPopUpSlide)`
`
//투명효과 적용
export const SlideWrapper = styled.div`
    position: absolute;
    -webkit-backdrop-filter: blur(1.5rem);
    -moz-backdrop-filter: blur(1.5rem);
    -o-backdrop-filter: blur(1.5rem);
    -ms-backdrop-filter: blur(1.5rem);
    backdrop-filter: blur(1.5rem);
`
