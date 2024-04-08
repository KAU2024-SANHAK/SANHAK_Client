import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import SvgIcBlank from "../../../assets/svg/IcBlank";
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";


export default function Step4(props){
    return (
        <S.Wrapper>
            <Title>
                <p style={{lineHeight: '4rem'}}>
                허니베어가 해주는 답장
                </p>
            </Title>

            <S.Body>
                <S.BlankImage/>
                <SubTitle><p>허니베어와 함께<br/>당신의 하루를 되돌아 보아요</p></SubTitle>
            </S.Body>

            <S.Footer>
                <OnBoardingProgressbar cur='Step4'/>
                <BtnOnBordingNext setStep={props.onNxt}/>
            </S.Footer>

        </S.Wrapper>
    )
}