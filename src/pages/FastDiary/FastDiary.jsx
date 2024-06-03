import * as S from './FastDiary.style';
import { useModal } from '../../hooks/common/useModal';
import { useFunnel } from '../../hooks/common/useFunnel';
import { useNavigate } from 'react-router-dom';
import useResetKeywords from '../../hooks/diary/useResetKeywords';
import BtnHome from '../../components/common/buttons/Home/BtnHome';
import DiaryProgress from '../../components/DiaryProgress/DiaryProgress';
import OptionModal from '../../components/Modal/OptionModal';
import StepProgress from '../../components/common/StepPrgoress/StepProgress';
import FastDiaryStep1 from '../../components/FastDiarySteps/FastDiaryStep1';
import FastDiaryStep2 from '../../components/FastDiarySteps/FastDiaryStep2';
import FastDiaryStep3 from '../../components/FastDiarySteps/FastDiaryStep3';
import FastDiaryStep4 from '../../components/FastDiarySteps/FastDiaryStep4';
import FastDiaryStep5 from '../../components/FastDiarySteps/FastDiaryStep5';
import FastDiaryStep6 from '../../components/FastDiarySteps/FastDiaryStep6';

export default function FastDiary() {
  const date = new Date();
  const today = date.getDate();

  const navigate = useNavigate();
  const resetKeywords = useResetKeywords();
  const [isOpen, openModal, closeModal] = useModal();
  const [Funnel, Step, currentStep, setCurrentStep] = useFunnel('DiaryStep1');

  const steps = [
    { name: 'DiaryStep1', component: FastDiaryStep1, nextStep: 'DiaryStep2' },
    {
      name: 'DiaryStep2',
      component: FastDiaryStep2,
      nextStep: 'DiaryStep3',
      prevStep: 'DiaryStep1',
    },
    {
      name: 'DiaryStep3',
      component: FastDiaryStep3,
      nextStep: 'DiaryStep4',
      prevStep: 'DiaryStep2',
    },
    {
      name: 'DiaryStep4',
      component: FastDiaryStep4,
      nextStep: 'DiaryStep5',
      prevStep: 'DiaryStep3',
    },
    {
      name: 'DiaryStep5',
      component: FastDiaryStep5,
      nextStep: 'DiaryStep6',
      prevStep: 'DiaryStep4',
    },
    {
      name: 'DiaryStep6',
      component: FastDiaryStep6,
      nextStep: '/diaryview',
      prevStep: 'DiaryStep5',
    },
  ];

  const handleNext = () => {
    const nextStepIndex = steps.findIndex((step) => step.name === currentStep) + 1;

    if (nextStepIndex < steps.length) {
      setCurrentStep(steps[nextStepIndex].name);
    } else {
      navigate(steps[nextStepIndex - 1].nextStep);
    }
  };

  const handlePrev = () => {
    const prevStepIndex = steps.findIndex((step) => step.name === currentStep) - 1;

    setCurrentStep(steps[prevStepIndex].name);
  };
  const handleGoMain = () => {
    resetKeywords();
    navigate('/main');
  };

  return (
    <S.FastDairyPageWrapper $isEven={today % 2}>
      {isOpen && (
        <OptionModal
          closeModal={closeModal}
          handleOption={handleGoMain}
          optionText='홈으로 돌아가기'
          closeText='이어서 기록하기'
        >
          홈으로 되돌아가시겠습니까?
          <br />
          되돌아가면 감정과 글은 초기화됩니다.
        </OptionModal>
      )}

      <S.FastDiaryHeader>
        <S.HomeButtonWrapper>
          <BtnHome
              onClick={() => {
                openModal();
              }}
            />
        </S.HomeButtonWrapper>

        <DiaryProgress steps={steps} cur={currentStep} />
      </S.FastDiaryHeader>

      <S.HoneyBearWrapper>
        <S.HoneyBear height='30rem' />
      </S.HoneyBearWrapper>

      <S.WritingWrapper>
        <S.WritingForm>
          <Funnel>
            {steps.map((step, idx) => (
              <Step key={idx} name={step.name}>
                <step.component
                  onNext={() => {
                    handleNext();
                  }}
                  onPrev={() => {
                    handlePrev();
                  }}
                />
                <S.ProgressWrapper>
                  <StepProgress steps={steps} cur={step.name} />
                </S.ProgressWrapper>
              </Step>
            ))}
          </Funnel>
        </S.WritingForm>
      </S.WritingWrapper>
    </S.FastDairyPageWrapper>
  );
}
