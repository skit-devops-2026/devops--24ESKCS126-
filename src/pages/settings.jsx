import { useState } from 'react';
import './settings.css';

function Settings() {
    const [dailyReminder, setDailyReminder] = useState(true);
    const [progressUpdates, setProgressUpdates] = useState(true);
    const [message, setMessage] = useState('');
    return (
        <div className="settings-page">

            <div className="settings-header">
                <h1>Settings</h1>
                <p>Manage your preferences and account settings.</p>
            </div>

            <div className="settings-container">

                <div className="settings-card">
                    <h2>General</h2>

                    <div className="setting-row">
                        <div>
                            <h3>Daily Practice Reminder</h3>
                            <p>Get reminded to maintain your coding practice.</p>
                        </div>

                        <label className="toggle">
                            <input
                                type="checkbox"
                                checked={dailyReminder}
                                onChange={() => setDailyReminder(!dailyReminder)}
                            />
                            <span></span>
                        </label>
                    </div>

                    <div className="setting-row">
                        <div>
                            <h3>Progress Updates</h3>
                            <p>Receive updates about your learning progress.</p>
                        </div>

                        <label className="toggle">
                            <input
                                type="checkbox"
                                checked={progressUpdates}
                                onChange={() => setProgressUpdates(!progressUpdates)}
                            />
                            <span></span>
                        </label>
                    </div>
                </div>

                <div className="settings-card">
                    <h2>Learning Preferences</h2>

                    <div className="setting-select">
                        <label>Difficulty Preference</label>

                        <select defaultValue="medium">
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    <div className="setting-select">
                        <label>Preferred Platform</label>

                        <select defaultValue="leetcode">
                            <option value="leetcode">LeetCode</option>
                            <option value="hackerrank">HackerRank</option>
                            <option value="codechef">CodeChef</option>
                        </select>
                    </div>
                </div>

                <div className="settings-card">
                    <h2>Account</h2>

                    <div className="account-action">
                        <div>
                            <h3>Change Password</h3>
                            <p>Update your account password.</p>
                        </div>

                        <button onClick={() => setMessage('Password change will be available after backend authentication is connected.')}>
                            Change
                        </button>
                    </div>

                    <div className="account-action">
                        <div>
                            <h3>Connected Platforms</h3>
                            <p>Manage your coding platform connections.</p>
                        </div>

                        <button onClick={() => setMessage('Platform management will be connected to your account settings.')}>
                            Manage
                        </button>
                    </div>
                    {message && (
                        <div className="settings-message">
                            {message}
                            <button onClick={() => setMessage('')}>×</button>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
}

export default Settings;