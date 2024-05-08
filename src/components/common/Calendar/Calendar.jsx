import React, { useEffect, useState } from "react";
import { getDate, getMonth } from "date-fns";
import { getYear } from "date-fns";
import * as S from './Calendar.style'
import BtnNextMonth from '../buttons/Next/BtnNextMonth'
import BtnPrevMonth from '../buttons/Prev/BtnPrevMonth'
import SelectInToggleBtn from "../buttons/SelectInToggleBtn/SelectInToggleBtn";
import CalendarPopUp from "../CalendarPopUp/CalendarPopUp";
import SmallPopUp from "../../PopUp/SmallPopUp/SmallPopUp";

// TEST: 테스트코드를 불러와서 작업
import { monthList } from "../../../utils/onDiary";

{monthList.map=((item) => (
  date=item.createdDate
))}

const range = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};

const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isClick, setIsClick] = useState(false);
  // const years = range(2023, getYear(new Date()), 1);
  // const months = [
  //   "1월",
  //   "2월",
  //   "3월",
  //   "4월",
  //   "5월",
  //   "6월",
  //   "7월",
  //   "8월",
  //   "9월",
  //   "10월",
  //   "11월",
  //   "12월",
  // ];

  const handleDate = () => {
    setIsClick(!isClick);
  };

  // 좌우버튼을 누르면 달이 바뀜. keyboard-selected 컴포넌트 값을 request body로 보내고 다이어리 리스트를 받아서 해당 월에 표시
  // keyboard-selected와 day-selected가 함께 있으면 keyboard-selected의 달력 조회버튼을 띄우도록.
  
	return (
    <S.CalendarComponentWrapper>
      <S.CustomDatePicker
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
        selected={startDate}
        useWeekdaysShort={false}
        onChange={(date) => setStartDate(date)}
        calendarClassName="oneStripes"
        maxDate={new Date()}
        inline

        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <S.HeaderWrapper>

            <S.BtnLeftWrapper onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {/* <BtnPrevMonth onClick={console.log(getMonth(date)+1)}/> */}
              <BtnPrevMonth onClick={console.log(getYear(date))}/>
            </S.BtnLeftWrapper>
            {/* <S.YearSelector
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <S.YearOption key={option} value={option}>
                  {option}
                </S.YearOption>
              ))}
            </S.YearSelector>ßß
  
            <S.MonthSelector
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <S.MonthOption key={option} value={option}>
                  {option}
                </S.MonthOption>
              ))}
            </S.MonthSelector> */}
  

          <SelectInToggleBtn onClick={handleDate} currentYear={getYear(date)} currentMonth={getMonth(date)}/>
            {isClick === true ? 
              <SmallPopUp name={getYear(date)}>
                <CalendarPopUp />
                <S.CloseBtn onClick={handleDate}>x</S.CloseBtn>
              </SmallPopUp>
            
            :  
            null}
            <S.BtnRightWrapper onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <BtnNextMonth/>
            </S.BtnRightWrapper>
          </S.HeaderWrapper>
        )}
      />
    </S.CalendarComponentWrapper>
    
  );
};

export default ReactDatePicker;
