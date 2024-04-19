import * as S from './OnBoarding.style'
import { useFunnel } from '../../hooks/common/useFunnel'
import Step1 from '../../components/OnBoardingSteps/Step1/Step1'
import Step2 from '../../components/OnBoardingSteps/Step2/Step2'
import Step3 from '../../components/OnBoardingSteps/Step3/Step3'
import Step4 from '../../components/OnBoardingSteps/Step4/Step4'
import Step5 from '../../components/OnBoardingSteps/Step5/Step5'
import Step6 from '../../components/OnBoardingSteps/Step6/Step6'
import { useNavigate } from 'react-router-dom'
import StepProgress from '../../components/common/StepPrgoress/StepProgress'

export default function OnBoarding(){

    const navigate = useNavigate();
    const steps = [
        { name: 'Step1', component: Step1, nextStep: 'Step2' },
        { name: 'Step2', component: Step2, nextStep: 'Step3' },
        { name: 'Step3', component: Step3, nextStep: 'Step4' },
        { name: 'Step4', component: Step4, nextStep: 'Step5' },
        { name: 'Step5', component: Step5, nextStep: 'Step6' },
        { name: 'Step6', component: Step6, nextStep: '/main' }
    ]
    const [Funnel, Step, currentStep, setCurrentStep] = useFunnel("Step1")
    
    const handleNext=()=>{
        const nextStepIndex = steps.findIndex(step => step.name === currentStep) + 1;

        if (nextStepIndex < steps.length) {
            setCurrentStep(steps[nextStepIndex].name);
        } else {
            navigate(steps[nextStepIndex-1].nextStep);
        }
    }

    return(
        <S.OnBoardingPageWrapper>
            <Funnel>
                {steps.map((step, idx)=>(
                    <Step key = {idx} name = {step.name}>
                        <S.ProgressWrapper>
                            <StepProgress steps= {steps} cur={step.name}/>        
                        </S.ProgressWrapper>
                        <step.component onNext={()=>{handleNext()}}/>
                    </Step>
                ))}

            </Funnel>
        </S.OnBoardingPageWrapper>
    )
}