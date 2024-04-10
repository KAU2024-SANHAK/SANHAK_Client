import * as S from './FastDiary.style'
import BtnHome from '../../components/common/buttons/Home/BtnHome';
import DiaryPrgoress from '../../components/DiaryProgress/DiaryProgress';
import Modal from '../../components/Modal/Modal';
import HomeModal from '../../components/Modal/HomeModal';
import { useState } from 'react';
import StepProgress from '../../components/common/StepPrgoress/StepProgress';

export default function FastDiary(){
    const date = new Date();
    const today = date.getDate();

    const [showModal, setShowModal] = useState(false);
    
    //steps는 추후에 각 퍼널 정보를 담은 객체 배열로 변경하겠습니다. 지금은 임시로!
    const steps =['Step1', 'Step2', 'Step3', 'Step4', 'Step5']

    return(
        <S.FastDairyPageWrapper $isEven = {today%2}>
            {showModal && <HomeModal/>}
            
            <S.Header>
                <S.HomeButtonWrapper onClick={()=>{setShowModal(true)}}>
                    <BtnHome/>                    
                </S.HomeButtonWrapper>
                
                <DiaryPrgoress cur = {0}/>
            </S.Header>
            
            <S.WritingForm>
                <StepProgress steps = {steps} cur = 'Step1'/>
            </S.WritingForm>

            
        </S.FastDairyPageWrapper>
    )
}