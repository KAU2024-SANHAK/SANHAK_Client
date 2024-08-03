import { useState } from 'react';

export function useFunnel( defaultStep ){
  const [currentStep, setCurrentStep] = useState(defaultStep);
  
  const Step = ({ children })=>{
    return <>{children}</>
  };

  const Funnel = ({ children })=>{
    const targetStep = children.find(childStep => childStep.name === currentStep );
    return <>{targetStep}</>
  };

  return [Funnel, Step, currentStep, setCurrentStep];
}