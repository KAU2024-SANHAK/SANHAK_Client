import * as S from './RequestReplyViewBtn.style';

export default function RequestReplyViewBtn() {
    
    return (
        <S.RequestReplyViewBtnWrapper>
            <S.RequestReplyViewBtnIconWrapper>
                <S.RequestReplyViewBtnIcon />
            </S.RequestReplyViewBtnIconWrapper>
            <S.RequestReplyViewBtnText>
                답장 생성하기
            </S.RequestReplyViewBtnText>
        </S.RequestReplyViewBtnWrapper>
    );
}