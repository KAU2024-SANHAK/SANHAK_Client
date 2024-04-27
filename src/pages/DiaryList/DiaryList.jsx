import * as S from './DiaryList.sytle'
import { useNavigate } from 'react-router-dom';
import BtnBack from '../../components/common/buttons/Back/BtnBack';
import DiaryListComponent from '../../components/common/DiaryListComponent/DiaryListComponent';

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
            <S.DiaryListComponentWrapper>
                <DiaryListComponent/>
                <DiaryListComponent/>
                <DiaryListComponent/>
            </S.DiaryListComponentWrapper>
        </S.DiaryListWrapper>
    )
}