import { useModal } from '../../hooks/common/useModal';
import * as S from './FastDiary.style'
import BtnHome from '../../components/common/buttons/Home/BtnHome';
import DiaryPrgoress from '../../components/DiaryProgress/DiaryProgress';
import HomeModal from '../../components/Modal/HomeModal';
import StepProgress from '../../components/common/StepPrgoress/StepProgress';
import { IcHoneyBear } from '../../assets/svg';

export default function FastDiary(){
    const date = new Date();
    const today = date.getDate();

    const [isOpen, opneModal, closeModal] = useModal();

    //steps는 추후에 각 퍼널 정보를 담은 객체 배열로 변경하겠습니다. 지금은 임시로!
    const steps =['Step1', 'Step2', 'Step3', 'Step4', 'Step5']

    return(
        <S.FastDairyPageWrapper $isEven = {today%2}>
            {isOpen && <HomeModal closeModal = {closeModal}/>}
            <S.HoneyBearWrapper>
                <S.HoneyBear height='30.5rem'/>
            </S.HoneyBearWrapper>

            <S.FastDiaryHeader>
                <S.HomeButtonWrapper>
                    <BtnHome onClick={()=>{opneModal()}}/>                    
                </S.HomeButtonWrapper>
                
                <DiaryPrgoress cur = {0}/>
            </S.FastDiaryHeader>
            
            <S.WritingForm>
                <StepProgress steps = {steps} cur = 'Step1'/>
            </S.WritingForm>

            
        </S.FastDairyPageWrapper>
    )
}