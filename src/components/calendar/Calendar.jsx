import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { arrMonthName } from 'Constants/months.js';
import { setCalendar } from 'Helpers/helpers.js';
import CalendarSearch from './calendarSearch/CalendarSearch.jsx';
import DateSwitch from './dateSwitch/DateSwitch.jsx';
import Day from './day/Day.jsx';
import './calendar.css';

function Calendar() {
  const [isHeaderButtonActive] = useOutletContext();
  const actionsList = useSelector((state) => state.calendar.actions);
  const navigate = useNavigate();

  const [nowMonth, setNowMonth] = useState(1);
  const [requiredDay, setRequiredDay] = useState('');
  const [nowYear, setNowYear] = useState(2022);
  const [monthDays, setMonthDays] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const nowDate = new Date();

  useEffect(() => {
    if (!isHeaderButtonActive) {
      navigate('/login');
    }
    setNowMonth(nowDate.getMonth());
    setNowYear(nowDate.getFullYear());
  }, []);

  useEffect(() => {
    setCalendar(nowYear, nowMonth, setMonthDays);
  }, [nowMonth]);

  return (
    <div className="main">
      <CalendarSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        actionsList={actionsList}
        setNowYear={setNowYear}
        setNowMonth={setNowMonth}
        setRequiredDay={setRequiredDay}
      />
      <div className="container">
        <div className="main-calendar">
          <DateSwitch
            nowDate={nowDate}
            nowYear={nowYear}
            nowMonth={nowMonth}
            setNowMonth={setNowMonth}
            setNowYear={setNowYear}
            setMonthDays={setMonthDays}
            setRequiredDay={setRequiredDay}
          />
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
                  requiredDay={requiredDay}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
