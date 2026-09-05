import { useState } from 'react';
import './profile.css';

function Profile() {
    const [editing, setEditing] = useState(false);
    const [codeChefConnected, setCodeChefConnected] = useState(false);
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
                            {editing ? (
                                <input type="text" defaultValue="Shaili" />
                            ) : (
                                <p>Shaili</p>
                            )}
                        </div>

                        <div className="detail-row">
                            <span>Email</span>
                            {editing ? (
                                <input type="email" defaultValue="shaili@example.com" />
                            ) : (
                                <p>shaili@example.com</p>
                            )}
                        </div>

                        <div className="detail-row">
                            <span>Learning Goal</span>
                            {editing ? (
                                <input type="text" defaultValue="Master DSA" />
                            ) : (
                                <p>Master DSA</p>
                            )}
                        </div>

                        <button
                            className="edit-profile-btn"
                            onClick={() => setEditing(!editing)}
                        >
                            {editing ? 'Cancel' : 'Edit Profile'}
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

                            <button
                                className={codeChefConnected ? "connected" : "not-connected"}
                                onClick={() => setCodeChefConnected(!codeChefConnected)}
                            >
                                {codeChefConnected ? "Connected" : "Connect"}
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Profile;