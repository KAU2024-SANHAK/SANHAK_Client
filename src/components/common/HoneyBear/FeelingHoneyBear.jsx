import * as S from './FeelingHoneyBear.style';

export default function FeelingHoneyBear({feeling, width}){
  const feelingHoneyBears = {
    HAPPY: <S.Happy />,
    SAD: <S.Sad />,
    ANGRY: <S.Angry />,
    WORRIED: <S.Worried />,
    RELAX: <S.Relax />,
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