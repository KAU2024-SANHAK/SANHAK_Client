import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import Title from "../../common/title/Title";
import * as S from "../Step.style"
import SubTitle from "../../common/title/SubTitle";
import SvgIcBlank from "../../../assets/svg/IcBlank";

export default function Step2(props){
    return (
        <S.Wrapper>
            <Title>
                <p style={{lineHeight: '4rem'}}>바쁘고 귀찮아...<br/>
                도대체 일기는 언제 쓰지?
                </p>
            </Title>

            <S.Body>
                <S.BlankImage/> 
                <SubTitle><p> 분주한 일상 속, <br/>허니어리에 일기를 채워보세요</p></SubTitle>
            </S.Body>

            <S.Footer>
                <OnBoardingProgressbar cur='Step2'/>
                <BtnOnBordingNext setStep={props.onNxt}/>
            </S.Footer>

        </S.Wrapper>
    )
}