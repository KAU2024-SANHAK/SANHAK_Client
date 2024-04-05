import BtnNext from "../../common/buttons/Next/BtnNext";
import ProgressBar from "../../ProgressBar/PrgoressBar";
import Title from "../../common/title/Title";
import * as S from "../Step.style"
import SubTitle from "../../common/title/SubTitle";
import SvgIcBlank from "../../../assets/svg/IcBlank";

export default function Step1(props){
    return (
        <S.Wrapper>
            <Title>
                <p style={{lineHeight: '4rem'}}>당신은<br/>
                스스로의 감정에 솔직한가요?
                </p>
            </Title>

            <S.Body>
                <SvgIcBlank/>
                <SubTitle>
                    <p> 하루하루 스쳐갔던 우리의 감정들 <br/>이제 흘려보내지 말고 담아보아요</p>
                </SubTitle>
            </S.Body>
            
            <S.Footer>
                <ProgressBar cur='Step1'/>
                <BtnNext setStep={props.onNxt}></BtnNext>
            </S.Footer>

        </S.Wrapper>

        
    )
}