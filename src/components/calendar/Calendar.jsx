import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrMonthName } from '../../constants/months.js';
import Day from './Day.jsx';
import svgIcon from '../../assets/images/arrow.svg';
import './calendar.css';

function Calendar() {
  const isLogin = localStorage.getItem('isLogin');

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin || isLogin === 'false') {
      navigate('/login');
    }
  }, [isLogin]);

  const nowDate = new Date();

  const [nowMonth, setNowMonth] = useState(1);
  const [nowYear, setNowYear] = useState(2022);
  const [monthDays, setMonthDays] = useState([]);

  useEffect(() => {
    setNowMonth(nowDate.getMonth());
    setNowYear(nowDate.getFullYear());
  }, []);

  function setCalendar(year, month) {
    const monthDaysText = [];

    const monthDates = new Date(year, month + 1, 0).getDate();
    const monthPrefix = new Date(year, month, 0).getDay();

    if (monthPrefix > 0) {
      for (let i = 1; i <= monthPrefix; i += 1) {
        monthDaysText.push(' ');
      }
    }

    for (let i = 1; i <= monthDates; i += 1) {
      monthDaysText.push(i);
    }

    setMonthDays(monthDaysText);
  }

  useEffect(() => {
    setCalendar(nowYear, nowMonth);
  }, [nowMonth]);

  function handleMonthChange(operator) {
    let curDate = new Date(nowYear, nowMonth);

    operator === '+'
      ? curDate.setMonth(curDate.getMonth() + 1)
      : curDate.setMonth(curDate.getMonth() - 1);

    setNowMonth(curDate.getMonth());
    setNowYear(curDate.getFullYear());

    setCalendar(nowYear, nowMonth);
  }

  return (
    <div className="main">
      <div className="main-header">
        <div className="main-header-search-wrapper">
          <svg
            className="main-header-search-icon"
            width="17"
            height="17"
            viewBox="0 0 24 25"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.7061 22.5569L17.9363 16.7671C19.3665 15.0174 20.2286 12.7762 20.2286 10.3335C20.2286 4.73041 15.698 0.184082 10.1143 0.184082C4.52571 0.184082 0 4.73041 0 10.3335C0 15.9365 4.52571 20.4828 10.1143 20.4828C12.5486 20.4828 14.7771 19.6227 16.5208 18.1876L22.2906 23.9725C22.6824 24.3656 23.3143 24.3656 23.7061 23.9725C24.098 23.5842 24.098 22.9452 23.7061 22.5569ZM10.1143 18.4628C5.64245 18.4628 2.00816 14.8159 2.00816 10.3335C2.00816 5.85102 5.64245 2.19921 10.1143 2.19921C14.5812 2.19921 18.2204 5.85102 18.2204 10.3335C18.2204 14.8159 14.5812 18.4628 10.1143 18.4628Z" />
          </svg>
          <input
            className="main-header-search-input"
            type="text"
            placeholder="Событие, дата или участник"
          />
        </div>
      </div>
      <div className="main-calendar">
        <div className="month">
          <img
            className="calendar-prev-icon"
            src={svgIcon}
            alt="prev"
            onClick={() => handleMonthChange('-')}
          />
          <p className="month-name">{arrMonthName[nowMonth]}</p>
          <p className="year-name">{nowYear}</p>
          <img
            className="calendar-next-icon"
            src={svgIcon}
            alt="next"
            onClick={() => handleMonthChange('+')}
          />
        </div>
        <div className="weekdays">
          <p>Понедельник</p>
          <p>Вторник</p>
          <p>Среда</p>
          <p>Четверг</p>
          <p>Пятница</p>
          <p>Суббота</p>
          <p>Воскресенье</p>
        </div>
        <div className="days">
          {monthDays.map((day, index) => {
            const id = `${index}${nowMonth}${nowYear}`;
            return (
              <Day
                key={id}
                dayNumber={day}
                nowYear={nowYear}
                nowMonth={nowMonth}
                id={id}
                monthName={arrMonthName[nowMonth]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
