import React from 'react';
import { arrMonthName } from 'Constants/months.js';
import { setCalendar, handleMonthChange, setNowDay } from 'Helpers/helpers.js';
import svgIcon from 'Assets/images/arrow.svg';
import './dateSwitch.css';

function DateSwitch({
  nowDate,
  nowYear,
  nowMonth,
  setNowMonth,
  setNowYear,
  setMonthDays,
  setRequiredDay,
}) {
  return (
    <div className="month">
      <img
        className="calendar-prev-icon"
        src={svgIcon}
        alt="prev"
        onClick={() =>
          handleMonthChange(
            '-',
            nowYear,
            nowMonth,
            setNowMonth,
            setNowYear,
            setCalendar,
            setMonthDays,
            setRequiredDay,
          )
        }
      />
      <p className="month-name">{arrMonthName[nowMonth]}</p>
      <p className="year-name">{nowYear}</p>
      <img
        className="calendar-next-icon"
        src={svgIcon}
        alt="next"
        onClick={() =>
          handleMonthChange(
            '+',
            nowYear,
            nowMonth,
            setNowMonth,
            setNowYear,
            setCalendar,
            setMonthDays,
            setRequiredDay,
          )
        }
      />
      <button
        className="button-now"
        onClick={() => setNowDay(nowDate, setNowYear, setNowMonth, setRequiredDay)}
      >
        Сегодня
      </button>
    </div>
  );
}

export default DateSwitch;
