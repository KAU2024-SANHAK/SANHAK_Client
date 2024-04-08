import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import SvgIcBlank from "../../../assets/svg/IcBlank";
import SetWritingStyle from "../SetWriitingStyle/SetWritingStyle";
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";

 
export default function Step5(props){
    return (
        <S.Wrapper>
            <Title>
                <p style={{lineHeight: '4rem'}}>
                    어떤 스타일의 글을 원하나요?
                </p>
            </Title>

            <S.Body>
                <SetWritingStyle></SetWritingStyle>
                <SubTitle><p>사용자의 성향을 파악하여<br/> 일기를 작성해줄게요</p></SubTitle>
            </S.Body>

            <S.Footer>
                <OnBoardingProgressbar cur='Step5'/>
                <BtnOnBordingNext setStep={props.onNxt}/>
            </S.Footer>

        </S.Wrapper>
    )
}