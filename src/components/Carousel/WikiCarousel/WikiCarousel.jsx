import * as S from './WikiCarousel.style'
import CharacterBox from './CharacterBox';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WikiCarousel({customs}){

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrow: false,
    };

    return(
        <S.WikiCarouselWrapper>
            <S.CustomSlider {...settings}>
                {customs.map((custom, idx)=>(
                    <CharacterBox key={idx} name={custom.name}>
                        {custom.component}    
                    </CharacterBox>
                ))}
            </S.CustomSlider>

        </S.WikiCarouselWrapper>
    )
}