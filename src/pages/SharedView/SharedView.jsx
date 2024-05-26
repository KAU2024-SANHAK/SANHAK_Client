import useGetSharedDiary from '../../hooks/queries/etc/useGetSharedDiary';
import * as S from './SharedView.style'
import { useParams } from 'react-router-dom'

export default function SharedView(){
  const { id } = useParams();
  const { data } = useGetSharedDiary(id);
  console.log(data)

  return(
    <S.SharedViewPageWrapper>

    </S.SharedViewPageWrapper>
  )
}