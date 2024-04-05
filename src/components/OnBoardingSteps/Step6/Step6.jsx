import BtnNext from "../../common/buttons/Next/BtnNext";
import ProgressBar from "../../ProgressBar/PrgoressBar";
import Title from "../../common/title/Title";
import * as S from "../Step.style"
import SubTitle from "../../common/title/SubTitle";
import SvgIcBlank from "../../../assets/svg/IcBlank";

export default function Step6(props){
    return (
        <S.Wrapper>
            <Title>
                <p style={{lineHeight: '4rem'}}>
                    그 날의 너를 기록하다
                </p>
            </Title>
            
            <S.Body>
                <SvgIcBlank/>
                <SubTitle><p>지금, 당신의 <br/>꿀 같았던 하루를 담아보세요</p></SubTitle>
            </S.Body>
            
            <S.Footer>
                <ProgressBar cur='Step6'/>
                <BtnNext setStep={props.onNxt}></BtnNext>
            </S.Footer>

        </S.Wrapper>
    )
}