import './profile.css';

function Profile() {
    return (
        <div className="profile-page">

            <div className="profile-header">
                <h1>My Profile</h1>
                <p>Manage your profile and coding journey.</p>
            </div>

            <div className="profile-content">

                <div className="profile-card">
                    <div className="profile-avatar">
                        S
                    </div>

                    <h2>Shaili</h2>
                    <p className="profile-role">DSA Learner</p>

                    <div className="profile-divider"></div>

                    <div className="profile-info">
                        <div>
                            <span>Problems Solved</span>
                            <strong>124</strong>
                        </div>

                        <div>
                            <span>Current Streak</span>
                            <strong>14 days</strong>
                        </div>

                        <div>
                            <span>Accuracy</span>
                            <strong>72%</strong>
                        </div>
                    </div>
                </div>

                <div className="profile-details">

                    <div className="details-card">
                        <h2>Personal Information</h2>

                        <div className="detail-row">
                            <span>Name</span>
                            <p>Shaili</p>
                        </div>

                        <div className="detail-row">
                            <span>Email</span>
                            <p>shaili@example.com</p>
                        </div>

                        <div className="detail-row">
                            <span>Learning Goal</span>
                            <p>Master DSA</p>
                        </div>

                        <button className="edit-profile-btn">
                            Edit Profile
                        </button>
                    </div>

                    <div className="details-card">
                        <h2>Connected Platforms</h2>

                        <div className="platform-row">
                            <div>
                                <strong>LeetCode</strong>
                                <p>Connected</p>
                            </div>

                            <span className="connected">Connected</span>
                        </div>

                        <div className="platform-row">
                            <div>
                                <strong>HackerRank</strong>
                                <p>Connected</p>
                            </div>

                            <span className="connected">Connected</span>
                        </div>

                        <div className="platform-row">
                            <div>
                                <strong>CodeChef</strong>
                                <p>Not connected</p>
                            </div>

                            <span className="not-connected">
                                Connect
                            </span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Profile;