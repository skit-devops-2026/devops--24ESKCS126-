import './settings.css';

function Settings() {
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
                            <input type="checkbox" defaultChecked />
                            <span></span>
                        </label>
                    </div>

                    <div className="setting-row">
                        <div>
                            <h3>Progress Updates</h3>
                            <p>Receive updates about your learning progress.</p>
                        </div>

                        <label className="toggle">
                            <input type="checkbox" defaultChecked />
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

                        <button>Change</button>
                    </div>

                    <div className="account-action">
                        <div>
                            <h3>Connected Platforms</h3>
                            <p>Manage your coding platform connections.</p>
                        </div>

                        <button>Manage</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Settings;