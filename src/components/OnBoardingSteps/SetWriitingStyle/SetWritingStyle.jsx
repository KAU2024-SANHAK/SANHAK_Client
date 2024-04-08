import * as S from './SetWritingStyle.style'

const handleSetWritingStyle= ()=>{
    //선호하는 스타일 전달
    //axios post 이용하면 되겠져>>?? instance 파둬야겠네.////.......
    //이건 ai로 보내나요 백으로 보내나요? 
}
export default function SetWritingStyle(){
    return(
        <S.Wrapper>
            <p style={{padding:"3rem"}}
            onClick={()=>{handleSetWritingStyle()}}
            >감정을 기반으로 한 느린 글쓰기</p>
            <p
            onClick={()=>{handleSetWritingStyle()}}
            >사건이 중심인 빠른 글쓰기</p> 
        </S.Wrapper>
    )
}