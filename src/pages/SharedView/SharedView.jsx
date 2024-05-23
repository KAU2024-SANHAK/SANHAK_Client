import * as S from './SharedView.style'
import { useParams } from 'react-router-dom'

export default function SharedView(){
  const { id } = useParams();
  console.log(id);

  return(
    <S.SharedViewPageWrapper>

    </S.SharedViewPageWrapper>
  )
}