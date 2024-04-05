import BtnNext from "../../common/buttons/Next/BtnNext";
import ProgressBar from "../../ProgressBar/PrgoressBar";
import Title from "../../common/title/Title";
import * as S from "../Step.style"
import SubTitle from "../../common/title/SubTitle";
import SvgIcBlank from "../../../assets/svg/IcBlank";

export default function Step4(props){
    return (
        <S.Wrapper>
            <Title>
                <p style={{lineHeight: '4rem'}}>
                허니베어가 해주는 답장
                </p>
            </Title>

            <S.Body>
                <SvgIcBlank/>
                <SubTitle><p>허니베어와 함께<br/>당신의 하루를 되돌아 보아요</p></SubTitle>
            </S.Body>

            <S.Footer>
                <ProgressBar cur='Step4'/>
                <BtnNext setStep={props.onNxt}></BtnNext>
            </S.Footer>

        </S.Wrapper>
    )
}