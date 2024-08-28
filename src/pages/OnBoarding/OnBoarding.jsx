import * as S from './OnBoarding.style';
import { useFunnel } from '../../hooks/common/useFunnel';
import { useNavigate } from 'react-router-dom';
import OnBoardingStep1 from '../../components/OnBoardingSteps/OnBoardingStep1';
import OnBoardingStep2 from '../../components/OnBoardingSteps/OnBoardingStep2';
import OnBoardingStep3 from '../../components/OnBoardingSteps/OnBoardingStep3';
import OnBoardingStep4 from '../../components/OnBoardingSteps/OnBoardingStep4';
import OnBoardingStep5 from '../../components/OnBoardingSteps/OnBoardingStep5';
import OnBoardingStep6 from '../../components/OnBoardingSteps/OnBoardingStep6';
import StepProgress from '../../components/common/StepPrgoress/StepProgress';

export default function OnBoarding() {
  const navigate = useNavigate();
  const steps = [
    { name: 'Step1', component: OnBoardingStep1, nextStep: 'Step2' },
    { name: 'Step2', component: OnBoardingStep2, nextStep: 'Step3' },
    { name: 'Step3', component: OnBoardingStep3, nextStep: 'Step4' },
    { name: 'Step4', component: OnBoardingStep4, nextStep: 'Step6' },
    { name: 'Step6', component: OnBoardingStep6, nextStep: '/main' },
  ];
  const [Funnel, Step, currentStep, setCurrentStep] = useFunnel('Step1');

  const handleNext = () => {
    const nextStepIndex = steps.findIndex((step) => step.name === currentStep) + 1;

    if (nextStepIndex < steps.length) {
      setCurrentStep(steps[nextStepIndex].name);
    } else {
      navigate(steps[nextStepIndex - 1].nextStep);
    }
  };

  return (
    <S.OnBoardingPageWrapper>
      <Funnel>
        {steps.map((step, idx) => (
          <Step key={idx} name={step.name}>
            <S.ProgressWrapper>
              <StepProgress steps={steps} cur={step.name} />
            </S.ProgressWrapper>
            <step.component onNext={handleNext}/>
          </Step>
        ))}
      </Funnel>
    </S.OnBoardingPageWrapper>
  );
}
