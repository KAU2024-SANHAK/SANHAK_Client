import * as S from './FeelingHoneyBear.style';

export default function FeelingHoneyBear({feeling}){
  const feelingHoneyBears = {
    HAPPY: <S.Happy />,
    SAD: <S.Sad />,
    ANGRY: <S.Angry />,
    WORRIED: <S.Worried />,
    RELAX: <S.Relax />,
    SURPRISED: <S.Surprised />,
  };

  return(
    <S.Wrapper>
      {feelingHoneyBears[feeling]}
    </S.Wrapper>
  )
}