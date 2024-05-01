import * as S from './SetWritingStyleModal.style'
import SetWritingStyle from "../../OnBoardingSteps/SetWriitingStyle/SetWritingStyle";
import BtnComplete from '../../common/buttons/complete/BtnComplete';

export default function SetWritingStyleModal({onClick}){
    return(
        <S.SetWritingStyleModalWrapper>
            <S.SetStyleWrapper>
                <SetWritingStyle/>
            </S.SetStyleWrapper>
            
            <S.ButtonField>
                <BtnComplete onClick={onClick}>선택 완료</BtnComplete>
            </S.ButtonField>
        </S.SetWritingStyleModalWrapper>

    )
}