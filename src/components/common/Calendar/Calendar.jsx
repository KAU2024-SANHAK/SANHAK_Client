import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import { getMonth } from "date-fns";
import { getYear } from "date-fns";
import * as S from './Calendar.style'

const range = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};

const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(2023, getYear(new Date()), 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
	return (
		<S.CalendarWrapper>
      <S.CalendarComponentWrapper>
        <DatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                margin: 16,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"이전달"}
              </button>
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
    
              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
    
              <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {"다음달"}
              </button>
            </div>
          )}
          selected={startDate}
          useWeekdaysShort={false}
          onChange={(date) => setStartDate(date)}
          maxDate={new Date()}
          inline
          className="custom-datepicker" // 추가: 클래스 이름을 지정하여 스타일 적용
        />
      </S.CalendarComponentWrapper>
		</S.CalendarWrapper>
  );
};

export default ReactDatePicker;
