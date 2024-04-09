import * as S from './FastDiary.style'
import BtnHome from '../../components/common/buttons/Home/BtnHome';
import DiaryPrgoress from '../../components/DiaryProgress/DiaryProgress';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';

export default function FastDiary(){
    const date = new Date();
    const today = date.getDate();

    const [showModal, setShowModal] = useState(false);
    console.log(showModal)

    return(
        <S.FastDairyPageWrapper $isEven = {today%2}>

            <S.Header>
                <S.HomeButtonWrapper onClick={()=>{setShowModal(true)}}>
                    <BtnHome/>
                    {showModal && <Modal/>}
                    
                </S.HomeButtonWrapper>
                
                <DiaryPrgoress/>
            </S.Header>
            
            <S.WritingForm>

            </S.WritingForm>

            
        </S.FastDairyPageWrapper>
    )
}