import * as S from '../FastDiaryStep.style'
import FeelingHive from '../FeelingHive/FeelingHive'
import SmallQuestion from '../Questions/SamllQuestion'
import BtnNext from '../../common/buttons/Next/BtnNext'

export default function FastDiaryStep1({keywords, setKeywords, onNext}){
    return(
        <S.FastDiaryStepWrapper>
            
            <SmallQuestion>
                오늘 느낀 감정을 선택해줄래?
            </SmallQuestion>

            
            <FeelingHive keywords={keywords} setKeywords={setKeywords}/>
            
            <S.ButtonField>
                <BtnNext onNext={onNext}/>
            </S.ButtonField>
        </S.FastDiaryStepWrapper>
    )
}