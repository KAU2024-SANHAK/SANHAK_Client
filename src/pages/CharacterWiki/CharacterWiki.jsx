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

        <WikiCarousel customs={HoneyBearCustom} />
      </S.WikiWrapper>
    </S.CharacterWikiPageWrapper>
  );
}
