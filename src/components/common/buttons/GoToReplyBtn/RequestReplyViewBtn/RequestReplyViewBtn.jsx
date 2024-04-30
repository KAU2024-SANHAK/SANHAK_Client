// GoToReplyBtn.js
import * as S from './GoToReplyBtn.style';

export default function GoToReplyBtn({ onReplyBtnClick }) {
    return (
        <S.GoToReplyBtnWrapper onClick={onReplyBtnClick}> {/* Call onReplyBtnClick when button is clicked */}
            <S.GoToReplyBtnIconWrapper>
                <S.GoToReplyBtnIcon />
            </S.GoToReplyBtnIconWrapper>
            <S.GoToReplyBtnText>
                답장 생성하기
            </S.GoToReplyBtnText>
        </S.GoToReplyBtnWrapper>
    );
}