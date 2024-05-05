import React, { useState } from "react";
import { getDate, getMonth } from "date-fns";
import { getYear } from "date-fns";
import * as S from './Calendar.style'
import BtnNextMonth from '../buttons/Next/BtnNextMonth'
import BtnPrevMonth from '../buttons/Prev/BtnPrevMonth'
import SelectInToggle from "../buttons/SelectInToggle/SelectInToggle";

const range = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};

const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(2023, getYear(new Date()), 1);
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  
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
              <BtnPrevMonth/>
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
            </S.MonthSelector>
   */}

            <SelectInToggle currentYear={getYear(date)} currentMonth={getMonth(date)}/>
            <S.BtnRightWrapper onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <BtnNextMonth/>
            </S.BtnRightWrapper>
          </S.HeaderWrapper>
        )}
      />
    </S.CalendarComponentWrapper>
    // isClicked?
  );
};

export default ReactDatePicker;
