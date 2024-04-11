import * as S from './BtnRed.style'

//이거 쓰이는 곳 여러군데여서 만들었는데
//변수명 뭐라해야할 지 모르겠어요....
//기능이 전부 다르네요 ㅋㅋㅋㅋ...
//아니면 이거 모달에서 하얀색으로도 쓰인느데 그냥 색깔도 받도록 할까요>?
export default function BtnRed(props){
    return(
        <S.Wrapper onClick= {props.onClick} height= {props.height}>
            {props.children}
        </S.Wrapper>
    )
}