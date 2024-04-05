import * as S from './OnBoarding.style'
import { useFunnel } from '../../hooks/common/useFunnel'
import Step1 from '../../components/OnBoardingSteps/Step1/Step1'
import Step2 from '../../components/OnBoardingSteps/Step2/Step2'
import Step3 from '../../components/OnBoardingSteps/Step3/Step3'
import Step4 from '../../components/OnBoardingSteps/Step4/Step4'
import Step5 from '../../components/OnBoardingSteps/Step5/Step5'
import Step6 from '../../components/OnBoardingSteps/Step6/Step6'
import { useNavigate } from 'react-router-dom'

export default function OnBoarding(){

    const navigate = useNavigate();
    const [Funnel, Step, setStep] = useFunnel("Step1")
    
    return(
        <S.Wrapper>
            <Funnel>
                <Step name='Step1'>
                    <Step1 onNxt={()=> setStep('Step2')}/>
                </Step>
                <Step name='Step2'>
                    <Step2 onNxt={()=> setStep('Step3')}/>
                </Step>
                <Step name='Step3'>
                    <Step3 onNxt={()=> setStep('Step4')}/>
                </Step>
                <Step name='Step4'>
                    <Step4  onNxt={() => setStep('Step5')}/>
                </Step>
                <Step name='Step5'>
                    <Step5 onNxt={() => setStep('Step6')}/>   
                </Step>
                <Step name='Step6'>
                    <Step6  onNxt={() => navigate('/main')}/>   
                </Step>
            </Funnel>

            


        </S.Wrapper>
    )
}