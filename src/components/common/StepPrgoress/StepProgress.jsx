import * as S from './StepProgress.style';
import { IcCurrentProgressCircle, IcProgressCircle} from '../../../assets/svg';

function StepProgress({ steps, cur }){
  return(
    <S.StepProgressWrapper>
      {steps.map((step, idx)=>(
        cur === step.name 
        ? <IcCurrentProgressCircle key = {idx} /> 
        : <IcProgressCircle key = {idx} />
      ))}
    </S.StepProgressWrapper>
  );
}
export default StepProgress;