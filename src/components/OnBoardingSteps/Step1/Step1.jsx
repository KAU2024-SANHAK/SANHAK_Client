import BtnNext from "../../common/buttons/Next/BtnNext";
import ProgressBar from "../../ProgressBar/PrgoressBar";
import Title from "../../common/title/Title";
import * as S from "./Step1.style"
import SubTitle from "../../common/title/SubTitle";

export default function Step1(props){
    return (
        <S.Wrapper>
            <Title>
                <p>당신의<br/>
                성격을 골라주세요
                </p>
                <SubTitle><p>일기 작성에 반영이 됩니다</p></SubTitle>
            </Title>
            

            <S.Footer>
                <ProgressBar cur='Step1'/>
                <BtnNext setStep={props.onNxt}></BtnNext>
            </S.Footer>

        </S.Wrapper>

        
    )
}