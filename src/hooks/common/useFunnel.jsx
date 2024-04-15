import { useState } from "react";

export function useFunnel(defaultStep){
    const [currentStep, setCurrentStep] = useState(defaultStep);
    
    const Step= (props)=>{
        return <>{props.children}</>
    }

    const Funnel = ({children})=>{
        const targetStep = children.find(childStep => childStep.props.name === currentStep );
        return <>{targetStep}</>
    }

    return [Funnel, Step, currentStep, setCurrentStep]
}