// import * as S from './Main.style'
// import MainStep1 from '../../components/MainStep/MainStep1/MainStep1'

// export default function Main(){
//     return(
//         <S.Wrapper>
//             <MainStep1/>
//         </S.Wrapper>
//     )
// }

import Slider from "react-slick";
import * as S from './Main.style';
import MainStep1 from "../../components/MainStep/MainStep1/MainStep1";
import MainStep2 from '../../components/MainStep/MainStep2/MainStep2';

export default function Main(){

    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 0
      };

    return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
            <S.Wrapper>
                <MainStep1/>
            </S.Wrapper>
        </div>
        <div>
            <S.Wrapper>
                <MainStep2/>
            </S.Wrapper>
        </div>
      </Slider>
    </div>
  );
}
