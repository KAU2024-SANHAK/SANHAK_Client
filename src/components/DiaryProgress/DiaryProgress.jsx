import * as S from './DiaryProgress.style'
import {IcDiaryProgress1,IcDiaryProgress2, IcDiaryProgress3,IcDiaryProgress4,IcDiaryProgress5,IcDiaryProgress6} from "../../assets/svg"

const Progresses = [
    <IcDiaryProgress1/>,
    <IcDiaryProgress2/>,
    <IcDiaryProgress3/>,
    <IcDiaryProgress4/>,
    <IcDiaryProgress5/>,
    <IcDiaryProgress6/>
]

export default function DiaryProgress({steps, cur}){
    return(
        <S.Wrapper>
            {Progresses.map((progress,idx) =>(
                steps[idx].name === cur ? <div  key = {idx}> {progress}</div> : null
            ))}
        </S.Wrapper>
    )
}