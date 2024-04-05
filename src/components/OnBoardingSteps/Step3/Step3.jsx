import BtnNext from "../../common/buttons/Next/BtnNext";
import ProgressBar from "../../ProgressBar/PrgoressBar";
import Title from "../../common/title/Title";
import * as S from "./Step3.style"
import SubTitle from "../../common/title/SubTitle";

export default function Step3(props){
    return (
        <S.Wrapper>
            <Title>
                <p>
                    생성형AI를 통한 일기 작성
                </p>
            </Title>
            
            <SubTitle><p> 6가지 질문에 답해주세요!<br/>허니베어가 일기를 작성해주고 그려줘요</p></SubTitle>
            <S.Footer>
                <ProgressBar cur='Step3'/>
                <BtnNext setStep={props.onNxt}></BtnNext>
            </S.Footer>

        </S.Wrapper>
    )
}