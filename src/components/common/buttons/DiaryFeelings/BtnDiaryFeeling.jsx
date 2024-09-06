import * as S from './BtnDiaryFeeling.style';

export default function BtnDiaryFeeling({ feeling, setFeeling, color, children, value }) {
  
  return (
    <S.DiaryFeelingButtonWrapper
      type='button'
      onClick={() => {
        setFeeling(value);
      }}
    >
      {value === 'NONE'
        ?
          <S.SmallFeelingText>{children}</S.SmallFeelingText>
        :
          <S.FeelingText>{children}</S.FeelingText>
      }
      <S.DiaryFeelingButton 
        color={feeling === value ? color : 'white'} 
        opacity={feeling === value ? 1.0 : 0.5}
      />
    </S.DiaryFeelingButtonWrapper>
  );
}
