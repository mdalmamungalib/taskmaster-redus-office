import React, { useState } from 'react';
import { FaSave, FaTimes, FaUser, FaLock, FaBell, FaAdjust } from 'react-icons/fa';
import { MdNotifications, MdSettings } from 'react-icons/md';
import { IoIosColorWand } from 'react-icons/io';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('light');
  const [volume, setVolume] = useState(50);

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleSave = () => {
    alert('Settings Saved!');
  };

  const handleCancel = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setNotifications(true);
    setTheme('light');
    setVolume(50);
  };

  return (
    <div className={`settings-page ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} p-8 h-screen`}>
      <div className="max-w-4xl mx-auto">
        {/* Tabs Navigation */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => handleTabChange('profile')}
            className={`flex items-center gap-2 ${activeTab === 'profile' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
          >
            <FaUser size={20} /> Profile
          </button>
          <button
            onClick={() => handleTabChange('preferences')}
            className={`flex items-center gap-2 ${activeTab === 'preferences' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
          >
            <MdSettings size={20} /> Preferences
          </button>
          <button
            onClick={() => handleTabChange('security')}
            className={`flex items-center gap-2 ${activeTab === 'security' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
          >
            <FaLock size={20} /> Security
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold">Profile Settings</h2>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="flex-1 px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="flex-1 px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold">App Preferences</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg"
              >
                <IoIosColorWand size={20} />
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="notifications" className="flex-1">Notifications</label>
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="volume" className="flex-1">Volume</label>
              <input
                type="range"
                id="volume"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full"
              />
              <span>{volume}%</span>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold">Security Settings</h2>
            <div className="flex items-center gap-2">
              <input
                type="password"
                placeholder="New Password"
                className="flex-1 px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="password"
                placeholder="Confirm Password"
                className="flex-1 px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={handleCancel}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg flex items-center gap-2"
          >
            <FaTimes />
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
          >
            <FaSave />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
