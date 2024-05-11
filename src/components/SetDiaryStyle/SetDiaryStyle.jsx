import * as S from './SetDiaryStyle.style';
import { useRecoilState } from 'recoil';
import { userDiaryType } from '../../recoil/atoms';
import BtnSetDiaryType from '../common/buttons/setDiaryType/BtnSetDiaryType';

export default function SetDiaryStyle({transparency}){
    const [diaryType,setDiaryType] = useRecoilState(userDiaryType);

    return(
        <S.Wrapper $transparency={transparency}>

                <BtnSetDiaryType isClick = {diaryType === 'FASTTYPE' ? true : false}
                    onClick={()=>{
                        setDiaryType('FASTTYPE');
                    }} >
                    빠른 일기
                </BtnSetDiaryType>

                <BtnSetDiaryType isClick = {diaryType === 'SLOWTYPE' ? true : false}
                    onClick={()=>{
                        setDiaryType('SLOWTYPE');
                    }} >
                    느린 일기
                </BtnSetDiaryType>
                
        </S.Wrapper>
    )
}