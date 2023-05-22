import React from 'react';
import './topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function Topbar() {
  return (
    <div>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>ReactAdmin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNoneIcon />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <LanguageIcon />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <SettingsIcon />
          </div>
          <img
            src='https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=300'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
