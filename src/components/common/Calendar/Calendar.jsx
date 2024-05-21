import React, { useState, useEffect } from "react";
import { getDate, getMonth, getYear, format } from "date-fns"; // format 함수 추가
import * as S from './Calendar.style'
import BtnNextMonth from '../buttons/Next/BtnNextMonth'
import BtnPrevMonth from '../buttons/Prev/BtnPrevMonth'
import SelectInToggleBtn from "../buttons/SelectInToggleBtn/SelectInToggleBtn";

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
    const current_date = new Date(); // 현재 날짜를 가져오는 코드 수정
    handleDateClick(getYear(current_date), getMonth(current_date)+1, getDate(current_date)); // 수정된 current_date 변수 사용
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
          // 현재 일자를 문자열로 변환하여 시간 부분을 제외한 것과 비교하여 일치하는지 확인
          const itemDate = format(new Date(item.createdDate), 'yyyy-MM-dd'); // format 함수로 변경
          const currentDateWithoutTime = format(new Date(current_date), 'yyyy-MM-dd'); // format 함수로 변경
          return itemDate === currentDateWithoutTime;
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
        inline

        renderCustomHeader={({ date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
          <S.HeaderWrapper>
            <S.BtnLeftWrapper onClick={() => { decreaseMonth(); handleDateChange(new Date(date.getFullYear(), date.getMonth() - 1, 1)); }} disabled={prevMonthButtonDisabled}>
              <BtnPrevMonth />
            </S.BtnLeftWrapper>
            <SelectInToggleBtn currentYear={getYear(date)} currentMonth={getMonth(date)}/>
            <S.BtnRightWrapper onClick={() => { increaseMonth(); handleDateChange(new Date(date.getFullYear(), date.getMonth() + 1, 1)); }} disabled={nextMonthButtonDisabled}>
              <BtnNextMonth />
            </S.BtnRightWrapper>
          </S.HeaderWrapper>
        )}
        
      />
    </S.CalendarComponentWrapper>
  );
};

export default ReactDatePicker;
