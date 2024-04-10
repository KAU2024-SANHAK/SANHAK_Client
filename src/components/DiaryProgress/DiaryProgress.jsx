import * as S from './DiaryProgress.style'

const Progresses = [
    <S.DiaryProgress1/>,
    <S.DiaryProgress2/>,
    <S.DiaryProgress3/>,
    <S.DiaryProgress4/>,
    <S.DiaryProgress5/>,
    <S.DiaryProgress6/>
]
//이 부분 별로 안좋은 구현인 것 같아요 ㅠㅠ....
export default function DiaryPrgoress(props){
    
    return(
        <S.Wrapper>
            
            {Progresses.map((progress,idx) =>(
                props.cur === idx ? <div  key = {idx}> {progress}</div> : null
            ))}
        </S.Wrapper>
    )
}