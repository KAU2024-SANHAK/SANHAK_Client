import { IcHappyBear, IcSadBear, IcAngryBear, IcWorriedBear, IcCalmBear, IcSurprisedBear } from '../../../assets/svg';
import * as S from './FeelingBox.style';

function FeelingBox () {
    const feelings = [
        { icon: IcHappyBear, label: "기쁨" },
        { icon: IcSadBear, label: "슬픔" },
        { icon: IcAngryBear, label: "분노" },
        { icon: IcWorriedBear, label: "걱정" },
        { icon: IcCalmBear, label: "평온" },
        { icon: IcSurprisedBear, label: "놀람" },
    ];
    return (
        <S.CarouselWrapper>
            {feelings.map((feeling, index) => (
                <S.FeelingBoxWrapper key={index}>
                        <feeling.icon />
                        {feeling.label}
                </S.FeelingBoxWrapper>
            ))}
        </S.CarouselWrapper>
    )
}

export default FeelingBox;