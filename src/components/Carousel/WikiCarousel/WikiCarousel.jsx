import * as S from './WikiCarousel.style'
import Slider from "react-slick";
import CharacterBox from './CharacterBox';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WikiCarousel(){

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
    };

    return(
        <S.WikiCarouselWrapper>
            <h2>slide</h2>
            <Slider {...settings}>
                <CharacterBox/>
                <CharacterBox/>
            </Slider>

        </S.WikiCarouselWrapper>
    )
}