import * as S from './CalendarPopUp.style'
import Slider from 'react-slick';

export default function CalendarPopUp() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true
    // beforeChange: function(currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    // },
    // afterChange: function(currentSlide) {
    //   console.log("after change", currentSlide);
    // }
  };

  return (
    <S.CalendarPopUpWrapper>
        <S.MonthsWrapper className="slider-container">
          <Slider {...settings}>
            <S.Months>
              <S.TextWrapper>1월</S.TextWrapper>
            </S.Months>
            <S.Months>
              <S.TextWrapper>2월</S.TextWrapper>
            </S.Months>
            <S.Months>
              <S.TextWrapper>3월</S.TextWrapper>
            </S.Months>
            <S.Months>
              <S.TextWrapper>4월</S.TextWrapper>
            </S.Months>
            <S.Months>
              <S.TextWrapper>5월</S.TextWrapper>
            </S.Months>
            <S.Months>
              <S.TextWrapper>6월</S.TextWrapper>
            </S.Months>
            <S.Months>
              <S.TextWrapper>7월</S.TextWrapper>
            </S.Months>
            <S.Months>
              <S.TextWrapper>8월</S.TextWrapper>
            </S.Months>
            <S.Months>
              <S.TextWrapper>9월</S.TextWrapper>
            </S.Months>
            <S.Months>
              <S.TextWrapper>10월</S.TextWrapper>
            </S.Months>
            <S.Months>
              <S.TextWrapper>11월</S.TextWrapper>
            </S.Months>
            <S.Months>
              <S.TextWrapper>12월</S.TextWrapper>
            </S.Months>
          </Slider>
        </S.MonthsWrapper>
    </S.CalendarPopUpWrapper>
  )
}