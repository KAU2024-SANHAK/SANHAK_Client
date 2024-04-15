import * as S from './SetWritingStyleModal.style'
import SetWritingStyle from "../../OnBoardingSteps/SetWriitingStyle/SetWritingStyle";
import BtnComplete from '../../common/buttons/complete/BtnComplete';
import Modal from '../Modal';

export default function SetWritingStyleModal(){
    return(
        <S.SetWritingStyleModalWrapper>
            <S.SetStyleWrapper>
                <SetWritingStyle/>
            </S.SetStyleWrapper>
            
            <S.ButtonField>
                <BtnComplete>선택 완료</BtnComplete>
            </S.ButtonField>
        </S.SetWritingStyleModalWrapper>

    )
}