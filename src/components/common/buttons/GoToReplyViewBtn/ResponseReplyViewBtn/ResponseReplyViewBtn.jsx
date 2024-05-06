import * as S from './ResponseReplyViewBtn.style';

export default function ResponseReplyViewBtn() {
    
    return (
        <S.ResponseReplyViewBtnWrapper>
            <S.ResponseReplyViewBtnIconWrapper>
                <S.ResponseReplyViewBtnIcon />
            </S.ResponseReplyViewBtnIconWrapper>
            <S.ResponseReplyViewBtnText>
                답장 보러가기
            </S.ResponseReplyViewBtnText>
        </S.ResponseReplyViewBtnWrapper>
    );
}