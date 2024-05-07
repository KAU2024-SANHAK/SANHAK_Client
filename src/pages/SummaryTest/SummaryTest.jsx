import * as S from './SummaryTest.style';
import useGetSummary from '../../hooks/queries/main/useGetSummary';

export default function SummaryTest(){
  const data = useGetSummary();
  
  return(
    <S.Wrapper>
      {data}
    </S.Wrapper>
  )
}