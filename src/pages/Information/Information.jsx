import * as S from './Information.style';
import BtnSubmit from '../../components/common/buttons/Submit/BtnSubmit';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import houen from '../../assets/img/ggulbees/houen.png';
import philsoo from '../../assets/img/ggulbees/philsoo.png';
import somin from '../../assets/img/ggulbees/somin.png';
import minseok from '../../assets/img/ggulbees/minseok.png';
import jinhak from '../../assets/img/ggulbees/jinhak.png';

export default function Information() {
  const navigate = useNavigate();
  const [isBackgroundClick, setIsBackgroundClick] = useState(true);
  const [isGgulbeeClick, setIsGgulbeeClick] = useState(false);


  const handleGoHome = () => {
      navigate('/');
  }

  const BackgroundClick = () => {
      setIsBackgroundClick(true);
      setIsGgulbeeClick(false);
  }
  const BackgroundNotClick = () => {
      setIsBackgroundClick(false);
  }
  const GgulbeeClick = () => {
      setIsBackgroundClick(false);
      setIsGgulbeeClick(true);
  }
  const GgulbeeNotClick = () => {
      setIsGgulbeeClick(false);
  }
  return (
      <S.InfoWrapper>
          <S.TopWrapper>
              <S.Header>
                  <S.Subtitle>
                      꿀같은 일상을 담는 일기서비스
                  </S.Subtitle>
                  <S.Title>
                      허니어리 🍯
                  </S.Title>
              </S.Header>
              <S.Body>


                  {isBackgroundClick ? 
                      <S.FirstStatement>
                          <S.HonearyBackgroundBtn onClick={BackgroundNotClick}>
                              허니어리 서비스의 배경
                          </S.HonearyBackgroundBtn>
                          허니어리 서비스는 바쁜 일상을 꾸준하게 기록하고 싶었던 사람들의 니즈를 파악하여 만들게 된 서비스 입니다.
                          <br />
                          <br />
                          생성형 AI를 활용하여 간단한 키워드 입력으로 하루 기록이 생성 되고, 그를 통한 이미지 및 조언 글, 감정 정의가 생성이 됩니다.
                          <br />
                          <br />
                          꾸준한 하루 기록 뿐만 아니라 내 스스로 오늘 하루를 정의 내리지 못할때 허니어리 서비스는 도움이 될 것이며, 친구들과 함께 내 감정을 공유 하며 더 좋은 하루를 기록 할 수 있을 것입니다 : )
                          <br />
                          <br />
                          부족하지만, 열심히 만들어 봤습니다. 앞으로 더 좋은 허니어리를 위해 꾸준히 노력하겠습니다 ! : )
                      </S.FirstStatement>
                  :
                      <S.HonearyBackgroundBeforeClickBtn onClick={BackgroundClick}>
                          허니어리 서비스의 배경
                      </S.HonearyBackgroundBeforeClickBtn>
                  }

                  {isGgulbeeClick ? 
                      <S.SecondStatement>
                          <S.GgulbeesStatementBtn onClick={GgulbeeNotClick}>
                              TEAM HONEYARY
                          </S.GgulbeesStatementBtn>

                          <S.GgulbeeInfoWrapper1>
                              왕호은
                              <S.IntroductionText>
                                  Team Leader
                              </S.IntroductionText>
                              <S.format>
                                  <S.GgulbeePhotoWrapper>
                                      <S.GgulbeePhoto src={houen}/>
                                  </S.GgulbeePhotoWrapper>
                                  <S.GgulbeeFromatStatement1>
                                      “꿀같은 하루를 담다 - 허니어리 🍯🐻” <br />
                                      제작을 맡은  꿀Bee팀장 왕호은이라고 합니다. 더 좋은 서비스를 위해 꾸준히 연구하고 있습니다. 피드백을 환영합니다!    
                                  </S.GgulbeeFromatStatement1>
                              </S.format>
                          </S.GgulbeeInfoWrapper1>

                          <S.GgulbeeInfoWrapper2>
                              송필수
                              <S.IntroductionText>
                                  Frontend Engineer
                              </S.IntroductionText>
                              <S.format>
                                  <S.GgulbeeFromatStatement2>
                                      프론트엔드 맡은 항공대 소프트웨어학과 송필수 입니다. 부족한 실력이지만 열심히 만들었으니, 잘 사용해주시면 감사하겠습니다! &#60;pissssssu.tistory.com&#62;
                                  </S.GgulbeeFromatStatement2>
                                  <S.GgulbeePhotoWrapper>
                                      <S.GgulbeePhoto src={philsoo}/>
                                  </S.GgulbeePhotoWrapper>
                              </S.format>
                          </S.GgulbeeInfoWrapper2>

                          <S.GgulbeeInfoWrapper1>
                              성소민
                              <S.IntroductionText>
                                  UX/UI Designer, Frontend Engineer
                              </S.IntroductionText>
                              <S.format>
                                  <S.GgulbeePhotoWrapper>
                                      <S.GgulbeePhoto src={somin}/>
                                  </S.GgulbeePhotoWrapper>
                                  <S.GgulbeeFromatStatement1>
                                      UX/UI 디자인과 프론트엔드를 담당한 <br /> 항공대 스마트드론공학과 성소민입니다. 허니어리 서비스만의 개성있고, 힐링되는 UI 경험을 얻어가시면 좋겠습니다!
                                  </S.GgulbeeFromatStatement1>
                              </S.format>
                          </S.GgulbeeInfoWrapper1>

                          <S.GgulbeeInfoWrapper2>
                              좌민석
                              <S.IntroductionText>
                                  Backend Engineer
                              </S.IntroductionText>   
                              <S.format>
                                  <S.GgulbeeFromatStatement2>
                                      안녕하세요 백엔드를 담당한 좌민석입니다! 사용자분들이 저희 허니어리를 통해서  자신의 하루를 소중히 간직할 수 있었으면 좋겠습니다 🤗
                                  </S.GgulbeeFromatStatement2>
                                  <S.GgulbeePhotoWrapper>
                                      <S.GgulbeePhoto src={minseok}/>
                                  </S.GgulbeePhotoWrapper>
                              </S.format>
                          </S.GgulbeeInfoWrapper2>

                          <S.GgulbeeInfoWrapper1>
                              송진학
                              <S.IntroductionText>
                                  AI Engineer
                              </S.IntroductionText>
                              <S.format>
                                  <S.GgulbeePhotoWrapper>
                                      <S.GgulbeePhoto src={jinhak}/>
                                  </S.GgulbeePhotoWrapper>
                                  <S.GgulbeeFromatStatement1>
                                      일기 자동완성, 감정 분석등 여러분이 사용하시게 될 기능들을 제작한 AI 담당 송진학입니다! <br />
                                      다양한 기능들 알차게 사용해주세요!
                                  </S.GgulbeeFromatStatement1>
                              </S.format>
                          </S.GgulbeeInfoWrapper1>


                      </S.SecondStatement>
                  :
                      <S.GgulbeesStatementBeforeClickBtn onClick={GgulbeeClick}>
                          TEAM HONEYARY
                      </S.GgulbeesStatementBeforeClickBtn>
                  }
              </S.Body>
          </S.TopWrapper>

          <S.Footer>
              <S.FooterText>
                  생성형 일기어플 허니어리를 직접 이용해보세요!
              </S.FooterText>
                  <BtnSubmit
                      onClick={() => {
                      handleGoHome();
                      }}
                      width='19.6rem'
                      height='4rem'
                      $color = {({ theme }) => theme.colors.pink.btn_hover_pink}
                  >
                      허니어리 사용하기
                  </BtnSubmit>
          </S.Footer>
      </S.InfoWrapper>
  )
}