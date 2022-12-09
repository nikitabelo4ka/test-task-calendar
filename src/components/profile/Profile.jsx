import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './profile.css';

function Profile() {
  const isLogin = localStorage.getItem('isLogin');

  const userName = localStorage.getItem('userName');

  const actionsList = useSelector((state) => state.calendar.actions);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin || isLogin === 'false') {
      navigate('/login');
    }
  }, [isLogin]);

  if (actionsList.length === 0) {
    return <p className="profile-no-actions">Ни одного события не создано</p>;
  }
  return (
    <div className="profile">
      <p className="profile-user">События пользователя {userName}:</p>
      {actionsList.map((action) => {
        return (
          <p key={action.id} className="profile-elem">
            {action.dayNumber} {action.monthName} {action.nowYear} {action.action}
          </p>
        );
      })}
    </div>
  );
}

export default Profile;
