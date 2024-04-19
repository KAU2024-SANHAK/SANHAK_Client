import * as S from './FeelingHive.style'
import { IcHoneyPot } from '../../../assets/svg'
import BtnDiaryFeeling from '../../common/buttons/DiaryFeelings/BtnDiaryFeeling'

export default function FeelingHive({keywords, setKeywords}){
    //const [keywords, setKeywords] = useRecoilState(fastDiaryKeywords)
    console.log(keywords)
    return(
        <S.FeelingHiveWrapper>
            <S.FirstLayer>
                <BtnDiaryFeeling keywords = {keywords} setKeywords = {setKeywords} color = '#FFCA99' text = '놀람' value ='SURPRISED'/>
                <BtnDiaryFeeling keywords = {keywords} setKeywords = {setKeywords} color = '#B9FFB3' text = '평온' value ='RELAX'/>
            </S.FirstLayer>

            <S.SecondLayer>
                <BtnDiaryFeeling keywords = {keywords} setKeywords = {setKeywords} color = '#FFF1A8' text = '기쁨' value ='HAPPY'/>
                <S.HoneyPotWrapper>
                    <IcHoneyPot/>
                </S.HoneyPotWrapper>
                <BtnDiaryFeeling keywords = {keywords} setKeywords = {setKeywords} color = '#C3C9FF' text = '걱정' value ='WORRIED'/>
            </S.SecondLayer>

            <S.ThirdLayer>
                <BtnDiaryFeeling keywords = {keywords} setKeywords = {setKeywords} color = '#B4F2FF' text = '슬픔' value ='SAD'/>        
                <BtnDiaryFeeling keywords = {keywords} setKeywords = {setKeywords} color = '#FFB6B6' text = '분노' value ='ANGRY'/>
            </S.ThirdLayer>

        </S.FeelingHiveWrapper>
    )
}