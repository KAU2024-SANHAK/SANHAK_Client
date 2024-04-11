import OnBoardingProgressbar from "../../OnBoardingProgressBar/OnBoardingPrgoressBar"
import BtnOnBordingNext from "../../common/buttons/OnBoardingNext/BtnOnBoardingNext"
import * as S from "../Step.style"
import Title from "../title/Title";
import SubTitle from "../title/SubTitle";

import sample from '../../../assets/sample.png'
//온보딩 최적화 부분이 조금 어려운 것 같아요...
//여기서 현재 상태랑 전체 배열도 넘겨줘야 된다 생각하는데
//지저분할 것 같고, 또 그렇다면 내부 구현 변수는 어떻게 처리하는지,,,ㅠㅠ
export default function Step1(props){
    return (
        <S.Wrapper>
            <S.Header>
                <OnBoardingProgressbar cur='Step1'/>
                <S.BtnWrapper onClick={()=>{props.onNxt()}}>
                    <BtnOnBordingNext />
                </S.BtnWrapper>
            </S.Header>

            <Title>
                당신은<br/>
                스스로의 감정에 솔직한가요?
            </Title>
            <SubTitle>
                하루하루 스쳐갔던 우리의 감정들 이제<br/>
                흘려보내지 말고 담아보아요
            </SubTitle>

            <S.Body>
                <img src={sample}/>
                <S.BlankImage />
            </S.Body>
            
        </S.Wrapper>

        
    )
}