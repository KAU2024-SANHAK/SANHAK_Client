import React, { useState, useEffect } from "react";
import { getDate, getMonth, getYear } from "date-fns";
import * as S from './Calendar.style'
import BtnNextMonth from '../buttons/Next/BtnNextMonth'
import BtnPrevMonth from '../buttons/Prev/BtnPrevMonth'
import SelectInToggleBtn from "../buttons/SelectInToggleBtn/SelectInToggleBtn";
import CalendarPopUp from "../CalendarPopUp/CalendarPopUp";
import SmallPopUp from "../../PopUp/SmallPopUp/SmallPopUp";

import { clickedDiary } from '../../../recoil/atoms'
import { useRecoilState } from "recoil";
import usePostCalendar from "../../../hooks/queries/main/usePostCalendar";

const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [highlightDates, setHighlightDates] = useState([]);
  const [thatDiaries, setThatDiaries] = useRecoilState(clickedDiary);
  const mutation = usePostCalendar();
  
  useEffect(() => {
    // 초기 렌더링 시 오늘 날짜에 대한 일기를 가져옴
    const current_date = new Date().toISOString().substring(0, 10);
    handleDateClick(getYear(current_date), getMonth(current_date) + 1, getDate(current_date));
  }, []);

  const result = highlightDates.map(item => new Date(item.createdDate));

  const handleDateClick = (Year, Month, Day) => {
    const current_date = `${Year}-${String(Month).padStart(2, '0')}-${String(Day).padStart(2, '0')}`;
    const body = {
      currentDate: current_date+'T00:00:00',
    };

    mutation.mutate(body, {
      onSuccess: (response) => {
        setHighlightDates(response.data.monthList)

        const MonthList = response.data.monthList
        const filterDiaries = MonthList.filter(item => {
          const itemDate = new Date(item.createdDate).toISOString().substring(0, 10);
          return itemDate === current_date
        });
        setThatDiaries(filterDiaries)
      },
      onError: (error) => {
        console.log(error.response.data.message);
      }
    });
  }

  const handleDateChange = (date) => {
    setStartDate(date);
    handleDateClick(getYear(date), getMonth(date) + 1, getDate(date));
  };

  return (
    <S.CalendarComponentWrapper>
      <S.CustomDatePicker
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
        selected={startDate}
        useWeekdaysShort={false}
        onChange={handleDateChange}
        calendarClassName="oneStripes"
        maxDate={new Date()}
        highlightDates={result}
        selectedDates={new Date()}
        dateFormat='yyyy-mm-dd'
        inline

        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <S.HeaderWrapper>
            <S.BtnLeftWrapper onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <BtnPrevMonth />
            </S.BtnLeftWrapper>
            <SelectInToggleBtn onClick={() => {handleDateClick(getYear(date), getMonth(date) + 1, getDate(date))}} currentYear={getYear(date)} currentMonth={getMonth(date)}/>
            <S.BtnRightWrapper onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <BtnNextMonth />
            </S.BtnRightWrapper>
          </S.HeaderWrapper>
        )}
      />
    </S.CalendarComponentWrapper>
  );
};

export default ReactDatePicker;
