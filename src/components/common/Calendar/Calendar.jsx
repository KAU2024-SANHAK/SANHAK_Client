import React, { useState } from "react";
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

import { clickedDiary } from '../../../recoil/atoms'
import { useRecoilState } from "recoil";
import usePostCalendar from "../../../hooks/queries/main/usePostCalendar";

const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isClick, setIsClick] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const mutation = usePostCalendar();
  
  // TEST
  const highlightDates = monthList.map(item => new Date(item.createdDate));

  const handleDate = () => {
    setIsClick(!isClick);
  };

  const handleDateClick = (Year, Month, Day) => {
    const current_date = `${Year}-${String(Month).padStart(2, '0')}-${String(Day).padStart(2, '0')}`;
    const body = {
      currentDate: current_date+'T00:00:00',
    };

    mutation.mutate(body, {
      onSuccess: (response) => {
        // 또는
        const datas = response.data.monthList
        console.log(datas)
        
        // 이거
        // response.map((item) => {console.log(item.data.monthList)})

        // 아님 이거
        // response.data.monthList.map((item) => {console.log(item.data.monthList)})
      },
      onError: (error) => {
        setErrorMessage(error.response.data.messgge);
        console.log(errorMessage)
      }
    });
  }

  // 1) 좌우버튼을 클릭하거나 날짜를 클릭하면 년, 월, 일을 request body로 보내기
  // 2) response body를 hightlightDates에 map 형식으로 저장하여 달력에 표시
  // 2-2) 년, 월, 일을 recoil atom clickedDiary에 저장
  // 3) [MainStep2]에서 리코일값 가져와서 DiaryListComponent에 랜더링



	return (
    <S.CalendarComponentWrapper>
      <S.CustomDatePicker
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
        selected={startDate}
        useWeekdaysShort={false}
        onChange={(date) => setStartDate(date)}
        calendarClassName="oneStripes"
        maxDate={new Date()}
        highlightDates={highlightDates}
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

            <SelectInToggleBtn onClick={() => {handleDateClick(getYear(date), getMonth(date)+1, getDate(date))}} currentYear={getYear(date)} currentMonth={getMonth(date)}/>
              {/* {isClick === true ? 
                <SmallPopUp name={getYear(date)}>
                  <CalendarPopUp />
                  <S.CloseBtn onClick={handleDate}>x</S.CloseBtn>
                </SmallPopUp>            
              :  
              null} */}

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
