import * as S from './CharacterWiki.style';
import { useNavigate } from 'react-router-dom';
import BtnBack from '../../components/common/buttons/Back/BtnBack';
import WikiCarousel from '../../components/Carousel/WikiCarousel/WikiCarousel';

export default function CharacterWiki() {
  const navigate = useNavigate();
  const handleMyPage = () => {
    navigate('/mypage');
  };

  const HoneyBearCustom = [
    { name: '일반 곰돌이', component: <S.HoneyBear /> },
    { name: '꿀벌 곰돌이', component: <S.BeeHoneyBear /> },
    { name: '왕자 곰돌이', component: <S.PrinceHoneyBear /> },
    { name: '대학생 곰돌이', component: <S.StudentHoneyBear /> },
    { name: '부자 곰돌이', component: <S.RichHoneyBear /> },
  ];

  const HoneyBeeCustom = [
    { name: '일반 꿀벌', component: <S.HoneyBee /> },
    { name: '곰돌이 꿀벌', component: <S.BearHoneyBee /> },
    { name: '왕자 꿀벌', component: <S.PrinceHoneyBee /> },
    { name: '대학생 꿀벌', component: <S.StudentHoneyBee /> },
    { name: '부자 꿀벌', component: <S.RichHoneyBee /> },
  ];

  return (
    <S.CharacterWikiPageWrapper>
      <S.ButtonField>
        <BtnBack handleClick={handleMyPage} />
      </S.ButtonField>

      <S.WikiWrapper>
        <S.CharacterNameWrapper>곰돌이</S.CharacterNameWrapper>

        <WikiCarousel customs={HoneyBearCustom} />
      </S.WikiWrapper>

      <S.WikiWrapper>
        <S.CharacterNameWrapper>꿀벌</S.CharacterNameWrapper>

        <WikiCarousel customs={HoneyBeeCustom} />
      </S.WikiWrapper>
    </S.CharacterWikiPageWrapper>
  );
}
