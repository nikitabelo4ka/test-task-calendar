import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router';
import { arrMonthName } from 'Constants/months';
import './profile.css';

function Profile() {
  const [isHeaderButtonActive] = useOutletContext();
  const userName = localStorage.getItem('userName');
  const actionsList = useSelector((state) => state.calendar.actions);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isHeaderButtonActive) {
      navigate('/login');
    }
  }, []);

  if (actionsList.length === 0) {
    return <p className="profile-no-actions">Ни одного события не создано</p>;
  }

  return (
    <div className="container">
      <div className="profile">
        <p className="profile-user">События пользователя {userName}:</p>
        {actionsList.map((action) => {
          return (
            <p key={action.id} className="profile-elem">
              {action.dayNumber}.{arrMonthName.indexOf(action.monthName) + 1}.{action.nowYear}: {action.action}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
