import * as S from './SetDiaryStyle.style'
import { useRecoilState } from 'recoil'
import { DairyTypeState } from '../../recoil/atoms'
import BtnSetDiaryType from '../common/buttons/setDiaryType/BtnSetDiaryType'


const handleSetWritingStyle= ()=>{
    console.log('api 요청하세요')
}

export default function SetWritingStyle({transparency}){
    const [diaryType,setDiaryType] = useRecoilState(DairyTypeState)

    return(
        <S.Wrapper $transparency={transparency}>

                <BtnSetDiaryType isClick = {diaryType === 'Fast' ? true : false}
                    onClick={()=>{
                    handleSetWritingStyle();
                    setDiaryType('Fast')
                    }} >
                    빠른 일기
                </BtnSetDiaryType>

                <BtnSetDiaryType isClick = {diaryType === 'Slow' ? true : false}
                    onClick={()=>{
                    handleSetWritingStyle();
                    setDiaryType('Slow')
                    }} >
                    느린 일기
                </BtnSetDiaryType>
                
        </S.Wrapper>
    )
}