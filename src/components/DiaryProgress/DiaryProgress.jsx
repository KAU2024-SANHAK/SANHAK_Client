import * as S from './DiaryProgress.style'
import SvgIcDiaryProgress1 from "../../assets/svg/IcDiaryProgress1"
import SvgIcDiaryProgress2 from "../../assets/svg/IcDiaryProgress2"
import SvgIcDiaryProgress3 from "../../assets/svg/IcDiaryProgress3"
import SvgIcDiaryProgress4 from "../../assets/svg/IcDiaryProgress4"
import SvgIcDiaryProgress5 from "../../assets/svg/IcDiaryProgress5"
import SvgIcDiaryProgress6 from "../../assets/svg/IcDiaryProgress6"

const Progresses = [
    <SvgIcDiaryProgress1/>,
    <SvgIcDiaryProgress2/>,
    <SvgIcDiaryProgress3/>,
    <SvgIcDiaryProgress4/>,
    <SvgIcDiaryProgress5/>,
    <SvgIcDiaryProgress6/>
]

export default function DiaryPrgoress(props){
    
    return(
        <S.Wrapper>
            
            {Progresses.map((progress,idx) =>(
                props.cur === idx ? <div  key = {idx}> {progress}</div> : null
            ))}
        </S.Wrapper>
    )
}