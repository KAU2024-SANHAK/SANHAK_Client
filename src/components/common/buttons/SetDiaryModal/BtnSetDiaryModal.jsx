import * as S from './BtnSetDiaryModal.style'

//충격적인 변수명,, 그렇지만 좋은 게 떠오르지가 않네요
//자신의 현재 상태에 따라 텍스트값 렌더링되도록 수정
//이거 온보딩때 recoil로 저장해두고, 여기서 다시 불러와야겠네요. 
export default function BtnSetDiaryModal({onClick}){
    return(
        <S.ButtonWrapper onClick={()=>{onClick()}}>
            빠른 일기    
        </S.ButtonWrapper>
    )
}