import * as S from './Main.style';
import MainStep1 from '../../components/MainStep/MainStep1/MainStep1';
import CreateDiaryButtonField from '../../components/CreateDiaryButtonField/CreateDiaryButtonField';

function Main() {
  return (
    <S.MainWrapper>
      <S.HoneyBearWrapper>
        <S.HoneyBear />
      </S.HoneyBearWrapper>
      <MainStep1 />
      <CreateDiaryButtonField />
    </S.MainWrapper>
  );
}

export default Main;
