import styled from 'styled-components';

export const CreatedDiaryWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(15px);

`
export const BtnHomeWrapper = styled.div`
    position: absolute;
    left: 2.8rem;
    top: 3.2rem;
`
export const TodayEmotionBtnWrapper = styled.div`
    
`
export const CreatedDiaryComponentWrapper = styled.div`
    // ${({ theme: { mixin } }) => mixin.flexCenter({})};
    // margin-top: 13.1rem;
    position: absolute;
    top: 13.1rem;
    gap: 1.1rem;
    // bottom: 1.6rem;

`
export const DiaryTopTextWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};

`
export const DiaryTitle = styled.p`
    ${({ theme }) => theme.fonts.heading_01};
    // heading_02로 하면 엄청 작아져요..! 무슨 문제가 있나봐요!
`
export const DiaryDate = styled.p`
    margin-right: 22.7rem;
    // 위에 코드 진짜 바보같은거 아는데.. 우선 뷰 구현 먼저 해야해서.. 하다가 안되서 넣었어용.. 여유 있을 때 수정하겠습니다!!!
    ${({ theme }) => theme.fonts.body_10};
`
export const DiaryPhotoWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 32rem;
    height: 31.4rem;
    flex-shrink: 0;
    border-radius: 30px;
    background: #FF8686;
`
export const DiaryTextWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 32rem;
    height: 23.5rem;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.49);
`
export const DiaryText = styled.p`
    ${({ theme }) => theme.fonts.body_02};
`