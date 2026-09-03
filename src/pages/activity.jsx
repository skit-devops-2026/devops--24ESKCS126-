import './activity.css';

function Activity() {
    return (
        <div className="activity-page">

            <div className="activity-header">
                <div>
                    <h1>Your Activity</h1>
                    <p>Track your coding journey and progress over time.</p>
                </div>
            </div>

            <div className="activity-stats">

                <div className="activity-stat-card">
                    <p className="activity-stat-title">Problems Solved</p>
                    <h2>124</h2>
                    <span>+12 this month</span>
                </div>

                <div className="activity-stat-card">
                    <p className="activity-stat-title">Current Streak</p>
                    <h2>14 days</h2>
                    <span>Keep going!</span>
                </div>

                <div className="activity-stat-card">
                    <p className="activity-stat-title">Total Time</p>
                    <h2>96 hrs</h2>
                    <span>Time spent solving</span>
                </div>

                <div className="activity-stat-card">
                    <p className="activity-stat-title">Accuracy</p>
                    <h2>72%</h2>
                    <span>+6% this month</span>
                </div>

            </div>

            <div className="activity-section">

                <div className="section-heading">
                    <h2>Recent Activity</h2>
                    <span>View all</span>
                </div>

                <div className="activity-list">

                    <div className="activity-item">
                        <div className="activity-icon">✓</div>
                        <div className="activity-info">
                            <h3>Solved Minimum Size Subarray Sum</h3>
                            <p>LeetCode · Medium · Sliding Window</p>
                        </div>
                        <span className="activity-time">Today</span>
                    </div>

                    <div className="activity-item">
                        <div className="activity-icon">✓</div>
                        <div className="activity-info">
                            <h3>Solved Two Sum</h3>
                            <p>LeetCode · Easy · Arrays</p>
                        </div>
                        <span className="activity-time">Yesterday</span>
                    </div>

                    <div className="activity-item">
                        <div className="activity-icon">✓</div>
                        <div className="activity-info">
                            <h3>Solved Valid Anagram</h3>
                            <p>HackerRank · Easy · Strings</p>
                        </div>
                        <span className="activity-time">2 days ago</span>
                    </div>

                    <div className="activity-item">
                        <div className="activity-icon">✓</div>
                        <div className="activity-info">
                            <h3>Completed Sliding Window Practice</h3>
                            <p>DSAForge · Practice Session</p>
                        </div>
                        <span className="activity-time">3 days ago</span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Activity;