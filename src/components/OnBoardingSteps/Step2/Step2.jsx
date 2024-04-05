import BtnNext from "../../common/buttons/Next/BtnNext";
import ProgressBar from "../../ProgressBar/PrgoressBar";
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
                <SvgIcBlank/>
                <SubTitle><p> 분주한 일상 속, <br/>허니어리에 일기를 채워보세요</p></SubTitle>
            </S.Body>

            <S.Footer>
                <ProgressBar cur='Step2'/>
                <BtnNext setStep={props.onNxt}></BtnNext>
            </S.Footer>

        </S.Wrapper>
    )
}