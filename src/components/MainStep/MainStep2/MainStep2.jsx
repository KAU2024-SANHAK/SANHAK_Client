import * as S from './MainStep2.style';
import HoneyBearMainStep2 from '../../common/HoneyBearMainStep2/HoneyBearMainStep2';
import Calendar from '../../common/Calendar/Calendar';
import DiaryList from '../../../pages/DiaryList/DiaryList';
// import { HoneyBear } from '../../../pages/MyPage/MyPage.style'

export default function MainStep2() {
  return (
    <S.MainStep2Wrapper>
      <S.MainStep2HoneyBearWrapper>
        <HoneyBearMainStep2 />
      </S.MainStep2HoneyBearWrapper>

      {/* honeyBear가 height=50이 가장 커진거라서...ㅜㅜ 재사용하기가 힘듭니다 */}
      {/* <S.MainStep2HoneyBearWrapper>
              <HoneyBear height='50rem' />
            </S.MainStep2HoneyBearWrapper> */}

      <S.MainStep2ComponentWrapper>
        <Calendar />
        <DiaryList />
      </S.MainStep2ComponentWrapper>
    </S.MainStep2Wrapper>
  );
}
