import React from 'react';

function Day({ day }) {
  return <div className={day === ' ' ? 'day unactive' : 'day'}>{day}</div>;
}

export default Day;
