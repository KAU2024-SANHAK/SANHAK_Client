import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import Title from "../../common/title/Title";
import * as S from "../Step.style"
import SubTitle from "../../common/title/SubTitle";
import SvgIcBlank from "../../../assets/svg/IcBlank";

export default function Step3(props){
    return (
        <S.Wrapper>
            <Title>
                <p style={{lineHeight: '4rem'}}>
                    생성형AI를 통한 일기 작성
                </p>
            </Title>
            
            <S.Body>
                <S.BlankImage/>
                <SubTitle><p> 6가지 질문에 답해주세요!<br/>허니베어가 일기를 작성해주고 그려줘요</p></SubTitle>
            </S.Body>

            <S.Footer>
                <OnBoardingProgressbar cur='Step3'/>
                <BtnOnBordingNext setStep={props.onNxt}/>
            </S.Footer>

        </S.Wrapper>
    )
}