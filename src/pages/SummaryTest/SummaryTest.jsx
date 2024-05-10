import * as S from './SummaryTest.style';
import useGetSummary from '../../hooks/queries/main/useGetSummary';

export default function SummaryTest(){
  const { data, isLoading, isError } = useGetSummary('summaryData');
  
  return(
    <S.Wrapper>
      {data.data.firstFeeling}
    </S.Wrapper>
  )
}