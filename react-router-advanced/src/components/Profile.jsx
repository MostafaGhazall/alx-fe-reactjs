import React from 'react';
import { Link, Outlet, Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <ul>
          <li><Link to="details">Details</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
      <Outlet /> {/* This will render nested routes */}
    </div>
  );
}

export default Profile;
