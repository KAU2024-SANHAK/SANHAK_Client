import styled from "styled-components";
import SvgIcBlank from "../../assets/svg/IcBlank";

export const OnBoardingStepWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100%;
`
export const OnBoardingHeader = styled.header`
    ${({ theme: { mixin } }) => mixin.flexBox({justify:'center',align: 'center' })};
    position: absolute;
    top: 5rem;
    width: 100%;
`

export const OnBoardingBody = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', align: 'center' })};
    width: 100%;
    text-align: left;
    height: 68%;
`

export const OnBoardingFooter = styled.footer`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: absolute;
    bottom: 1rem;
    margin-top: 10rem;
`
export const OnBoardingImgWrapper = styled.div`
    height: 53%;
`
export const OnBoardingImg = styled.img`

`
//이거...도저히 안되겠어요 ㅠㅠㅠㅠㅠ
//곰돌이 맞추려면 제가 생각하기에는 제목을 묶어서
//position absolute 랑 top으로 박아버리는 것밖에 없는데 다른 방법이 있을까요,...,.,.,
export const OnBoardingHoneyBearWrapper = styled.div`
    height: 40rem;
`

export const BtnWrapper = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 2rem;
`