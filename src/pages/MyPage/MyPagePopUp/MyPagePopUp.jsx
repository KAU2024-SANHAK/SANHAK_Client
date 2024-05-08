import * as S from './MyPagePopUp.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userDiaryType } from '../../../recoil/atoms';
import usePostDiaryType from "../../../hooks/queries/onboarding/usePostDiaryType";
import useLogout from '../../../hooks/queries/member/members/useLogout';
import BtnLogout from '../../../components/common/buttons/Logout/BtnLogout';
import BtnComplete from '../../../components/common/buttons/complete/BtnComplete';
import BtnSetCharacter from '../../../components/common/buttons/SetCharcater/BtnSetCharacter';
import BtnCurDiaryType from '../../../components/common/buttons/CurDiaryType/BtnCurDiaryType';
import SetWritingStyle from '../../../components/SetDiaryStyle/SetDiaryStyle';

export default function MyPagePopUp(){
  const [isClick, setIsClick] = useState(false);
  const postDiaryTypeMutation = usePostDiaryType();
  const logoutMutation = useLogout();
  const navigate = useNavigate();
  const curType = useRecoilValue(userDiaryType)
  const diaryTypeAtom = useRecoilValue(userDiaryType);

  const handlePostDiaryStyle = () => {
    const body = {
      userDiaryType : diaryTypeAtom,
    };

    postDiaryTypeMutation.mutate(body, {
        onSucess: (data) => {
            console.log(data);
        }
    })
  };

  const handleLogout = () => {
    logoutMutation.mutate();
    localStorage.removeItem('LOGIN_TOKEN');
    localStorage.removeItem('LOGIN_REFRESH_TOKEN');
    navigate('/');
  }

  const handlegoWiki = () => {
    navigate('/mypage/characterwiki');
  }
  return(
    <S.MyPagePopUpWrapper>

      <S.TextWrapper>일기 작성 스타일</S.TextWrapper>

        {isClick === false ? 
          <S.MyPagePopUpBodyWrapper>
            <BtnCurDiaryType 
              onClick = {() => {
                  setIsClick(true);
              }} 
              curType = {curType}
            />
            <BtnSetCharacter 
              onClick = {() => {
                  handlegoWiki();
              }}
            />
            <BtnLogout 
              onClick = {() => { 
                  handleLogout()
              }}
            />
          </S.MyPagePopUpBodyWrapper>
        :
        <S.MyPagePopUpBodyWrapper>
            <SetWritingStyle 
              transparency = '100'
            />
            <BtnComplete 
              onClick={() => {
                handlePostDiaryStyle();
                setIsClick(false);
              }}
            >
              선택 완료
            </BtnComplete>                
        </S.MyPagePopUpBodyWrapper>
        }

    </S.MyPagePopUpWrapper>
  )
}
