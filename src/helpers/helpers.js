import { arrMonthName } from 'Constants/months.js';
import { DEFAULT_USERNAME, DEFAULT_PASSWORD } from 'Constants/loginData.js';
import { addToListAction, editEventAction, removeFromListAction } from 'Store/calendarReducer.js';

export function setCalendar(nowYear, nowMonth, setMonthDays) {
  const monthDaysText = [];

  const monthDates = new Date(nowYear, nowMonth + 1, 0).getDate();
  const monthPrefix = new Date(nowYear, nowMonth, 0).getDay();

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

export function handleMonthChange(
  operator,
  nowYear,
  nowMonth,
  setNowMonth,
  setNowYear,
  setCalendar,
  setMonthDays,
  setRequiredDay,
) {
  let curDate = new Date(nowYear, nowMonth);

  operator === '+'
    ? curDate.setMonth(curDate.getMonth() + 1)
    : curDate.setMonth(curDate.getMonth() - 1);

  setNowMonth(curDate.getMonth());
  setNowYear(curDate.getFullYear());
  setCalendar(nowYear, nowMonth, setMonthDays);
  setRequiredDay('');
}

export function searchData(
  event,
  actionsList,
  searchValue,
  setNowYear,
  setNowMonth,
  setRequiredDay,
  setFilteredActionsList,
  setRequiredActionId,
) {
  event.preventDefault();
  let searchByAction = false;
  if (event.keyCode === 13) {
    setRequiredActionId(0);
    const filteredActionsList = actionsList.filter((action) => action.action.includes(searchValue));
    setFilteredActionsList(filteredActionsList);

    if (filteredActionsList.length > 0) {
      setNowYear(filteredActionsList[0].nowYear);
      setNowMonth(arrMonthName.indexOf(filteredActionsList[0].monthName));
      setRequiredDay(filteredActionsList[0].dayNumber);
      searchByAction = true;
    }

    if (!searchByAction && searchValue.match(/[0-9]{1,2} [А-Яа-я]+ [0-9]{4}/)) {
      const searchValueArr = searchValue.trim().split(' ');
      const month =
        searchValueArr[1].slice(0, 1).toLocaleUpperCase() +
        searchValueArr[1].slice(1, searchValueArr[1].length - 2).toLocaleLowerCase();
      const matchingMonthArray = arrMonthName.filter((item) => item.includes(month));
      const monthFromArray = matchingMonthArray[matchingMonthArray.length - 1];
      const monthIndex = arrMonthName.indexOf(monthFromArray);
      setNowMonth(monthIndex);
      setNowYear(searchValueArr[2]);
      setRequiredDay(searchValueArr[0]);
    } else if (!searchByAction && !searchValue.match(/[0-9]{1,2} [А-Яа-я]+ [0-9]{4}/)) {
      alert('Некорректный поисковой запрос !');
    }
  }
}

export function setNowDay(nowDate, setNowYear, setNowMonth, setRequiredDay) {
  setNowYear(nowDate.getFullYear());
  setNowMonth(nowDate.getMonth());
  setRequiredDay(nowDate.getDate());
}

export function addToList(actionValue, storedAction, dispatch, id, dayNumber, monthName, nowYear) {
  if (actionValue.length !== 0) {
    if (storedAction !== undefined) {
      dispatch(editEventAction({ id, dayNumber, monthName, nowYear, action: actionValue }));
      return;
    }
    dispatch(addToListAction({ id, dayNumber, monthName, nowYear, action: actionValue }));
  } else if (storedAction !== undefined) {
    dispatch(removeFromListAction(storedAction));
  }
}

export function removeFromList(dispatch, storedAction, setActionValue) {
  dispatch(removeFromListAction(storedAction));
  setActionValue('');
}

export function signOut(onSignOut, navigate) {
  localStorage.setItem('isLogin', 'false');
  localStorage.setItem('userName', '');
  onSignOut(false);
  navigate('/login');
}

export function checkData(
  event,
  userNameValue,
  passwordValue,
  setIsHeaderButtonActive,
  navigate,
  setIsValuesUncorrect,
) {
  event.preventDefault();

  if (userNameValue === DEFAULT_USERNAME && passwordValue === DEFAULT_PASSWORD) {
    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('userName', JSON.stringify(userNameValue));
    setIsHeaderButtonActive(true);
    navigate('/profile');
  } else {
    setIsValuesUncorrect(true);
  }
}

export function handleEventNavigation(
  action,
  filteredActionsList,
  setNowYear,
  setNowMonth,
  setRequiredDay,
  requiredActionId,
  setRequiredActionId,
) {
  let currentId = requiredActionId;

  if (action === '-' && requiredActionId === 0) {
    setRequiredActionId(filteredActionsList.length);
    currentId = filteredActionsList.length;
  }

  if (action === '+' && requiredActionId === filteredActionsList.length - 1) {
    setRequiredActionId(-1);
    currentId = -1;
  }

  setRequiredActionId((prevState) => eval(`${prevState}${action}1`));
  setNowYear(filteredActionsList[eval(`${currentId}${action}1`)].nowYear);
  setNowMonth(arrMonthName.indexOf(filteredActionsList[eval(`${currentId}${action}1`)].monthName));
  setRequiredDay(filteredActionsList[eval(`${currentId}${action}1`)].dayNumber);
}
