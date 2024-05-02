// 일기생성 완료 화면 (중앙 하단)에 보여지는 버튼_해당 페이지로 렌더링될 때, 답장 API를 AI에게 요청해야 하는 경우

import * as S from './GoToReplyBtn.style';

export default function RequestReplyViewBtn() {
    
    return (
        <S.GoToReplyBtnWrapper>
            <S.GoToReplyBtnIconWrapper>
                <S.GoToReplyBtnIcon />
            </S.GoToReplyBtnIconWrapper>
            <S.GoToReplyBtnText>
                답장 생성하기
            </S.GoToReplyBtnText>
        </S.GoToReplyBtnWrapper>
    );
}