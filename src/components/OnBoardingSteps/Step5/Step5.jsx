import BtnNext from "../../common/buttons/Next/BtnNext";
import ProgressBar from "../../ProgressBar/PrgoressBar";
import Title from "../../common/title/Title";
import * as S from "./Step5.style"
import SubTitle from "../../common/title/SubTitle";

export default function Step4(props){
    return (
        <S.Wrapper>
            <Title>
                <p>
                어떤 스타일의 글을 원하나요?
                </p>
            </Title>
            
            <SubTitle><p>사용자의 성향을 파악하여 일기를 작성해줄게요</p></SubTitle>
            <S.Footer>
                <ProgressBar cur='Step5'/>
                <BtnNext setStep={props.onNxt}></BtnNext>
            </S.Footer>

        </S.Wrapper>
    )
}