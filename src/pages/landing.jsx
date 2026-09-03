import './landing.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="landing-page">

            <header className="landing-navbar">
                <div className="landing-logo">
                    <span className="landing-logo-icon">🚀</span>
                    <span>DSAForge</span>
                </div>

                <div className="landing-nav-actions">
                    <Link to="/login" className="nav-login">
                        Login
                    </Link>

                    <Link to="/register" className="nav-register">
                        Get Started
                    </Link>
                </div>
            </header>

            <main className="landing-main">

                <section className="hero-section">

                    <div className="hero-content">

                        <span className="hero-badge">
                            ✦ Your Personal DSA Companion
                        </span>

                        <h1>
                            Master DSA.
                            <br />
                            <span>Improve Smarter.</span>
                        </h1>

                        <p>
                            DSAForge analyzes your coding performance,
                            identifies your weak areas, and recommends
                            problems that help you improve step by step.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/register" className="hero-primary">
                                Start Your Journey →
                            </Link>

                            <Link to="/login" className="hero-secondary">
                                I already have an account
                            </Link>
                        </div>

                    </div>

                    <div className="hero-visual">

                        <div className="visual-card main-visual-card">

                            <div className="visual-card-header">
                                <span>Your Progress</span>
                                <span className="visual-dot">●</span>
                            </div>

                            <div className="progress-number">
                                72%
                            </div>

                            <p>Overall Accuracy</p>

                            <div className="progress-bar">
                                <div className="progress-fill"></div>
                            </div>

                            <div className="visual-stats">
                                <div>
                                    <strong>124</strong>
                                    <span>Problems</span>
                                </div>

                                <div>
                                    <strong>14</strong>
                                    <span>Day Streak</span>
                                </div>

                                <div>
                                    <strong>8</strong>
                                    <span>Topics</span>
                                </div>
                            </div>

                        </div>

                        <div className="floating-card recommendation-floating">
                            <span>💡</span>
                            <div>
                                <strong>Next Step</strong>
                                <p>Practice Sliding Window</p>
                            </div>
                        </div>

                        <div className="floating-card skill-floating">
                            <span>✓</span>
                            <div>
                                <strong>Skill Improved</strong>
                                <p>Arrays +12%</p>
                            </div>
                        </div>

                    </div>

                </section>

                <section className="features-section">

                    <div className="feature">
                        <span>📊</span>
                        <h3>Analyze</h3>
                        <p>
                            Understand your strengths and weaknesses
                            through your coding activity.
                        </p>
                    </div>

                    <div className="feature">
                        <span>🎯</span>
                        <h3>Personalize</h3>
                        <p>
                            Get problem recommendations based on
                            your actual performance.
                        </p>
                    </div>

                    <div className="feature">
                        <span>🚀</span>
                        <h3>Improve</h3>
                        <p>
                            Follow a focused learning path and
                            continuously improve your DSA skills.
                        </p>
                    </div>

                </section>

            </main>

        </div>
    );
}

export default Landing;