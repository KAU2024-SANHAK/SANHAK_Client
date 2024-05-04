import * as S from './MyPagePopUp.style'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { UserDiaryType } from '../../../recoil/atoms'
import {useLogout} from '../../../hooks/queries/member/members/useLogout'
import BtnLogout from '../../../components/common/buttons/Logout/BtnLogout'
import BtnComplete from '../../../components/common/buttons/complete/BtnComplete'
import BtnSetCharacter from '../../../components/common/buttons/SetCharcater/BtnSetCharacter'
import BtnCurDiaryType from '../../../components/common/buttons/CurDiaryType/BtnCurDiaryType'
import SetWritingStyle from '../../../components/SetDiaryStyle/SetDiaryStyle'


export default function MyPagePopUp(){
    const [isClick, setIsClick] = useState(false);
    const curType = useRecoilValue(UserDiaryType);
    const  {mutation}  = useLogout();
    const navigate = useNavigate();

    const handlegoWiki = () => {
        navigate('/mypage/characterwiki');
    };

    const handleLogout = () => {
        mutation.mutate();
    };

    return(
        <S.MyPagePopUpWrapper>

            <S.TextWrapper>일기 작성 스타일</S.TextWrapper>
                {isClick === false ? 
                <S.MyPagePopUpBodyWrapper>
                    <BtnCurDiaryType onClick={()=>{setIsClick(true)}} curType={curType}/>
                    <BtnSetCharacter onClick={()=>{handlegoWiki()}}/>
                    <BtnLogout onClick={()=>{handleLogout()}}/>
                </S.MyPagePopUpBodyWrapper>
                :
                <S.MyPagePopUpBodyWrapper>
                    <SetWritingStyle transparency='100'/>
                    <BtnComplete onClick={()=>{setIsClick(false)}}>선택 완료</BtnComplete>                
                </S.MyPagePopUpBodyWrapper>
                }

        </S.MyPagePopUpWrapper>
    )
}