import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToListAction, editEventAction, removeFromListAction, } from '../../store/calendarReducer.js';

function Day({ dayNumber, nowYear, id, monthName, requiredDay }) {
  
  const dispatch = useDispatch();
  const [actionValue, setActionValue] = useState('');
  const actionsList = useSelector((state) => state.calendar.actions);
  const storedAction = actionsList.find((action) => action.id === id);

  function addToList() {
    if (actionValue.length !== 0) {
      if (storedAction !== undefined) {
        dispatch(editEventAction({ id, dayNumber, monthName, nowYear, action: actionValue }));
        return;
      }
      dispatch(addToListAction({ id, dayNumber, monthName, nowYear, action: actionValue }));
    }
  }

  function removeFromList() {
    dispatch(removeFromListAction(storedAction));
    setActionValue('');
  }

  useEffect(() => {
    if (storedAction !== undefined) {
      setActionValue(storedAction.action);
    }
  }, []);

  return (
    <div
      className={
        dayNumber === ' '
          ? 'day unactive'
          : dayNumber === Number(requiredDay)
          ? 'day required'
          : 'day'
      }
    >
      <div className="day-header">
        <p className="day-number">{dayNumber}</p>
        <svg
          className={storedAction !== undefined && ' ' ? 'day-remove-icon' : 'unactive-icon'}
          onClick={removeFromList}
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="gray"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.8518 12.0037L0.228844 22.7013C-0.0662813 22.9985 -0.0662813 23.48 0.228844 23.7772C0.376219 23.926 0.569719 24 0.762844 24C0.956344 24 1.14947 23.926 1.29684 23.7772L11.9997 12.9991L22.7026 23.7772C22.8503 23.926 23.0435 24 23.2366 24C23.4297 24 23.6232 23.926 23.7706 23.7772C24.0657 23.48 24.0657 22.9985 23.7706 22.7013L13.148 12.0037L23.7777 1.2985C24.0728 1.0013 24.0728 0.519814 23.7777 0.222616C23.4826 -0.0742052 23.0045 -0.0742052 22.7097 0.222616L12.0001 11.0082L1.28934 0.222993C0.994219 -0.0738276 0.516469 -0.0738276 0.221344 0.222993C-0.0737813 0.520192 -0.0737813 1.00168 0.221344 1.29887L10.8518 12.0037Z" />
        </svg>
      </div>
      <textarea
        value={actionValue}
        onChange={(event) => setActionValue(event.target.value)}
        className={dayNumber === Number(requiredDay) ? 'day-textarea required' : 'day-textarea'}
        cols="30"
        rows="10"
        onBlur={addToList}
      ></textarea>
    </div>
  );
}

export default Day;
