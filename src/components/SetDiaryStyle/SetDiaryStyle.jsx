import * as S from './SetDiaryStyle.style'
import { useRecoilState } from 'recoil'
import { UserDiaryType } from '../../recoil/atoms'
import BtnSetDiaryType from '../common/buttons/setDiaryType/BtnSetDiaryType'


const handleSetWritingStyle= ()=>{
    console.log('api 요청하세요')
}

export default function SetDiaryStyle({transparency}){
    const [diaryType,setDiaryType] = useRecoilState(UserDiaryType)

    return(
        <S.Wrapper $transparency={transparency}>

                <BtnSetDiaryType isClick = {diaryType === 'FASTTYPE' ? true : false}
                    onClick={()=>{
                    handleSetWritingStyle();
                    setDiaryType('FASTTYPE')
                    }} >
                    빠른 일기
                </BtnSetDiaryType>

                <BtnSetDiaryType isClick = {diaryType === 'SLOWTYPE' ? true : false}
                    onClick={()=>{
                    handleSetWritingStyle();
                    setDiaryType('SLOWTYPE')
                    }} >
                    느린 일기
                </BtnSetDiaryType>
                
        </S.Wrapper>
    )
}