import * as S from './Information.style';
import BtnSubmit from '../../components/common/buttons/Submit/BtnSubmit';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import photo1 from '../../assets/img/photo1.png';
import photo2 from '../../assets/img/photo2.png';
import photo3 from '../../assets/img/photo3.png';
import photo4 from '../../assets/img/photo4.png';
import photo5 from '../../assets/img/photo5.png';

export default function Information() {
    const navigate = useNavigate;
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
                    <S.HoneyBear height={70}/>
                        <S.Title>
                            꿀단지 서비스 <br />
                            허니어리란?
                        </S.Title>
                    <S.HoneyBear height={70}/>
                </S.Header>
                <S.Body>
                    

                    {isBackgroundClick ? 
                        <S.Statement>
                            <S.HonearyBackgroundBtn onClick={BackgroundNotClick}>
                                허니어리 서비스의 배경
                            </S.HonearyBackgroundBtn>
                            허니어리서비스는 일기를 작성하려고 하지만
                            바쁜 일상 속에 자꾸만 미루게 되는 mz 세대에게
                            기존의 줄글을 기록하는 다이어리 서비스와
                            차별화된 서비스를 원하는 유저를 위해 만들어졌습니다
                            <br />
                            <bt />
                            일기를 작성하는 이유가 기억보존과 감정 표현을
                            위해서인 사실을 설문을 통해서 조사했어요
                            <br />
                            <br />
                            귀찮음과 시간 부족이라는 사실을 인지하고 있고
                            이를 어떻게 유저들이 재미있게 풀어내나 했습니다.
                            풀어나가고 싶었습니다~
                            <br />
                            <br />
                            - 팀장 왕호은
                        </S.Statement>
                    :
                        <S.HonearyBackgroundBtn onClick={BackgroundClick}>
                            허니어리 서비스의 배경
                        </S.HonearyBackgroundBtn>
                    }

                    {isGgulbeeClick ? 
                        <S.Statement>
                            <S.GgulbeesStatementBtn onClick={GgulbeeNotClick}>
                                팀원(꿀비들) 소개
                            </S.GgulbeesStatementBtn>

                            <S.GgulbeeFromat>
                                <S.GgulbeeInfoWrapper>
                                    (팀장) 왕호은
                                    <S.GgulbeePhoto src={photo1}/>
                                </S.GgulbeeInfoWrapper>
                                <S.GgulbeeFromatStatement1>
                                    “꿀같은 하루를 담다 - 허니어리 🍯🐻” <br />
                                    제작을 맡은  꿀Bee팀장 왕호은이라고 합니다. 더 좋은 서비스를 위해 꾸준히 연구하고 있습니다. 피드백을 환영합니다!    
                                </S.GgulbeeFromatStatement1>
                            </S.GgulbeeFromat>

                            <S.GgulbeeFromat>
                                <S.GgulbeeFromatStatement2>
                                    프론트엔드 맡은 항공대 소프트웨어학과 송필수 입니다. 부족한 실력이지만 열심히 만들었으니, 잘 사용해주시면 감사하겠습니다! &#60;pissssssu.tistory.com&#62;
                                </S.GgulbeeFromatStatement2>
                                <S.GgulbeeInfoWrapper>
                                    (프론트) 송필
                                    <S.GgulbeePhoto src={photo2}/>
                                </S.GgulbeeInfoWrapper>
                            </S.GgulbeeFromat>

                            <S.GgulbeeFromat>
                                <S.GgulbeeInfoWrapper>
                                    (프론트) 성소민
                                    <S.GgulbeePhoto src={photo3}/>
                                </S.GgulbeeInfoWrapper>
                                <S.GgulbeeFromatStatement1>
                                    UX/UI 디자인과 프론트엔드를 담당한 <br /> 항공대 스마트드론공학과 성소민입니다. 허니어리 서비스만의 개성있고, 힐링되는 UI 경험을 얻어가시면 좋겠습니다!
                                </S.GgulbeeFromatStatement1>
                            </S.GgulbeeFromat>

                            <S.GgulbeeFromat>
                                <S.GgulbeeFromatStatement2>
                                    안녕하세요 백엔드를 담당한 좌민석입니다! 사용자분들이 저희 허니어리를 통해서  자신의 하루를 소중히 간직할 수 있었으면 좋겠습니다 🤗
                                </S.GgulbeeFromatStatement2>
                                <S.GgulbeeInfoWrapper>
                                    (벡엔드) 좌민석
                                    <S.GgulbeePhoto src={photo4}/>
                                </S.GgulbeeInfoWrapper>
                            </S.GgulbeeFromat>

                            <S.GgulbeeFromat>
                                <S.GgulbeeInfoWrapper>
                                    (AI) 송진학
                                    <S.GgulbeePhoto src={photo5}/>
                                </S.GgulbeeInfoWrapper>
                                <S.GgulbeeFromatStatement1>
                                    일기 자동완성, 감정 분석등 여러분이 사용하시게 될 기능들을 제작한 AI 담당 송진학입니다! <br />
                                    다양한 기능들 알차게 사용해주세요!
                                </S.GgulbeeFromatStatement1>
                            </S.GgulbeeFromat>

                        </S.Statement>
                    :
                        <S.GgulbeesStatementBtn onClick={GgulbeeClick}>
                            팀원(꿀비들) 소개
                        </S.GgulbeesStatementBtn>
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