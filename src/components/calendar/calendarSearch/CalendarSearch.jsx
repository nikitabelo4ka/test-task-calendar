import React, { useState } from 'react';
import { searchData, handleEventNavigation } from 'Helpers/helpers.js';
import svgIcon from 'Assets/images/arrow.svg';
import './calendarSearch.css';

function CalendarSearch({
  searchValue,
  setSearchValue,
  actionsList,
  setNowYear,
  setNowMonth,
  setRequiredDay,
}) {
  const [filteredActionsList, setFilteredActionsList] = useState([]);
  const [requiredActionId, setRequiredActionId] = useState(0);

  return (
    <div className="calendar-header">
      <div className="container">
        <div className="calendar-header-wrapper">
          <div
            className={
              filteredActionsList.length > 0
                ? 'calendar-header-search-result'
                : 'calendar-header-search-result unactive-search'
            }
          >
            <span className="calendar-header-search-result-text">
              Количество найденных событий: {filteredActionsList.length}
            </span>
            <img
              className="calendar-header-search-prev-icon"
              src={svgIcon}
              alt="prev"
              onClick={() =>
                handleEventNavigation(
                  '-',
                  filteredActionsList,
                  setNowYear,
                  setNowMonth,
                  setRequiredDay,
                  requiredActionId,
                  setRequiredActionId,
                )
              }
            />
            <img
              className="calendar-header-search-next-icon"
              src={svgIcon}
              alt="next"
              onClick={() =>
                handleEventNavigation(
                  '+',
                  filteredActionsList,
                  setNowYear,
                  setNowMonth,
                  setRequiredDay,
                  requiredActionId,
                  setRequiredActionId,
                )
              }
            />
          </div>
          <div className="calendar-header-search-wrapper">
            <svg
              className="calendar-header-search-icon"
              width="17"
              height="17"
              viewBox="0 0 24 25"
              fill="gray"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.7061 22.5569L17.9363 16.7671C19.3665 15.0174 20.2286 12.7762 20.2286 10.3335C20.2286 4.73041 15.698 0.184082 10.1143 0.184082C4.52571 0.184082 0 4.73041 0 10.3335C0 15.9365 4.52571 20.4828 10.1143 20.4828C12.5486 20.4828 14.7771 19.6227 16.5208 18.1876L22.2906 23.9725C22.6824 24.3656 23.3143 24.3656 23.7061 23.9725C24.098 23.5842 24.098 22.9452 23.7061 22.5569ZM10.1143 18.4628C5.64245 18.4628 2.00816 14.8159 2.00816 10.3335C2.00816 5.85102 5.64245 2.19921 10.1143 2.19921C14.5812 2.19921 18.2204 5.85102 18.2204 10.3335C18.2204 14.8159 14.5812 18.4628 10.1143 18.4628Z" />
            </svg>
            <input
              className="calendar-header-search-input"
              type="text"
              placeholder="Событие или дата"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              onKeyUp={(event) =>
                searchData(
                  event,
                  actionsList,
                  searchValue,
                  setNowYear,
                  setNowMonth,
                  setRequiredDay,
                  setFilteredActionsList,
                  setRequiredActionId,
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarSearch;
