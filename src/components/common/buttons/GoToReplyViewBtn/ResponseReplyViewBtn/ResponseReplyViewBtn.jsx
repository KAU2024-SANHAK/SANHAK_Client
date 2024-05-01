// 일기생성 완료 화면 (중앙 하단)에 보여지는 버튼_해당 페이지로 렌더링될 때, 답장 리코일이 존재하는 경우

import * as S from './GoToReplyBtn.style';

export default function GoToReplyBtn({ onReplyBtnClick }) {
    return (
        <S.GoToReplyBtnWrapper onClick={onReplyBtnClick}>
            <S.GoToReplyBtnIconWrapper>
                <S.GoToReplyBtnIcon />
            </S.GoToReplyBtnIconWrapper>
            <S.GoToReplyBtnText>
                답장 보러가기
            </S.GoToReplyBtnText>
        </S.GoToReplyBtnWrapper>
    );
}