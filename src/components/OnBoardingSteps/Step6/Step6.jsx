import BtnNext from "../../common/buttons/Next/BtnNext";
import ProgressBar from "../../ProgressBar/PrgoressBar";
import Title from "../../common/title/Title";
import * as S from "./Step6.style"
import SubTitle from "../../common/title/SubTitle";

export default function Step6(props){
    return (
        <S.Wrapper>
            <Title>
                <p>
                그 날의 너를 기록하다
                </p>
            </Title>
            
            <SubTitle><p>지금, 당신의,꿀 같았던 하루를 담아보세요</p></SubTitle>
            <S.Footer>
                <ProgressBar cur='Step6'/>
                <BtnNext setStep={props.onNxt}></BtnNext>
            </S.Footer>

        </S.Wrapper>
    )
}