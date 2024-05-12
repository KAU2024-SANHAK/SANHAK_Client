import * as S from './FeelingHoneyBear.style';

export default function FeelingHoneyBear({feeling, width}){
  const feelingHoneyBears = {
    HAPPY: <S.Happy />,
    SAD: <S.Sad />,
    ANGRY: <S.Angry />,
    WORRY: <S.Worried />,
    RELAXED: <S.Relax />,
    SURPRISED: <S.Surprised />,
    null: <S.None />
  };

  return(
    <S.Wrapper 
      width={width}
    >
      {feelingHoneyBears[feeling]}
    </S.Wrapper>
  )
}