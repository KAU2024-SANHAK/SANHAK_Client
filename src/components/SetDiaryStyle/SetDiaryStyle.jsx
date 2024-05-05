import * as S from './SetDiaryStyle.style'
import { useRecoilState } from 'recoil'
import { UserDiaryType } from '../../recoil/atoms'
import { usePostDiaryType } from '../../hooks/queries/onboarding/usePostDiaryType'
import BtnSetDiaryType from '../common/buttons/setDiaryType/BtnSetDiaryType'

export default function SetDiaryStyle({transparency}){
    const [diaryType,setDiaryType] = useRecoilState(UserDiaryType);
    const { mutation } = usePostDiaryType();

    const handleSetWritingStyle= ()=>{
        const body = {
            userDiaryType : diaryType,
        };

        mutation.mutate(body, {
            onSucess: (data) => {
                console.log(data);
            }
        })
    };

    return(
        <S.Wrapper $transparency={transparency}>

                <BtnSetDiaryType isClick = {diaryType === 'FASTTYPE' ? true : false}
                    onClick={()=>{
                        setDiaryType('FASTTYPE');
                        handleSetWritingStyle();
                    }} >
                    빠른 일기
                </BtnSetDiaryType>

                <BtnSetDiaryType isClick = {diaryType === 'SLOWTYPE' ? true : false}
                    onClick={()=>{
                        setDiaryType('SLOWTYPE');
                        handleSetWritingStyle();
                    }} >
                    느린 일기
                </BtnSetDiaryType>
                
        </S.Wrapper>
    )
}