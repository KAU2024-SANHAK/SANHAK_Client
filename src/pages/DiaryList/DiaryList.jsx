import * as S from './DiaryList.sytle'
import { useNavigate } from 'react-router-dom';
import BtnBack from '../../components/common/buttons/Back/BtnBack';

export default function DiaryList(){
    const navigate=useNavigate();
    const handleBackButton=()=>{
        navigate('/searchbyemotion');
    }

    return(
        
        <S.DiaryListWrapper>
            <S.BackButtonWrapper>
                <BtnBack onClick={()=>{handleBackButton()}}/>
            </S.BackButtonWrapper>
            다이어리 리스트 페이지 입니다.
        </S.DiaryListWrapper>
    )
}