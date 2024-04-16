import * as S from './WikiCarousel.style'
import CharacterBox from './CharacterBox';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WikiCarousel(){

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: false,
    };

    return(
        <S.WikiCarouselWrapper>
            <h2>slide</h2>
            <S.CustomSlider {...settings}>
                    <CharacterBox/>
                    <CharacterBox/>
                    <CharacterBox/>
            </S.CustomSlider>

        </S.WikiCarouselWrapper>
    )
}