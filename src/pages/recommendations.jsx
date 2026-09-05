import { useState } from 'react';
import './recommendations.css';

function Recommendations() {
    const [openReason, setOpenReason] = useState(null);
    return (
        <div className="recommendations-page">


            <div className="recommendations-header">

                <div>
                    <h1>Recommended for You</h1>

                    <p>
                        Personalized problems based on your performance
                        and learning path.
                    </p>
                </div>

                <div className="recommendation-note">
                    <span>💡</span>
                    <p>
                        These are not random problems.<br />
                        They are chosen for you. 💜
                    </p>
                </div>

            </div>



            <div className="recommendation-filters">

                <button className="filter-btn active">All</button>
                <button className="filter-btn">Easy</button>
                <button className="filter-btn">Medium</button>
                <button className="filter-btn">Hard</button>
                <button className="filter-btn">LeetCode</button>
                <button className="filter-btn">HackerRank</button>
                <button className="filter-btn">CodeChef</button>

            </div>



            <div className="recommendation-list">



                <div className="recommendation-card">

                    <div className="platform-icon leetcode">
                        LC
                    </div>

                    <div className="problem-content">

                        <h3>
                            Minimum Size Subarray Sum
                        </h3>

                        <div className="problem-tags">
                            <span className="difficulty">
                                Medium
                            </span>

                            <span>
                                Arrays
                            </span>

                            <span>
                                Sliding Window
                            </span>
                        </div>

                        <p className="recommendation-reason">
                            <strong>Recommended because:</strong>
                            {' '}You struggled with window condition
                            variations in previous problems.
                        </p>

                    </div>

                    <div className="problem-action">

                        <a
                            href="https://leetcode.com/problems/minimum-size-subarray-sum/"
                            target="_blank"
                            rel="noreferrer"
                            className="solve-btn"
                        >
                            Solve on LeetCode ↗
                        </a>

                        <button
                            className="why-btn"
                            onClick={() => setOpenReason(openReason === 1 ? null : 1)}
                        >
                            {openReason === 1 ? 'Hide reason' : 'Why this?'}
                        </button>
                        {openReason === 1 && (
                            <p className="why-reason">
                                This problem is recommended because you struggled with
                                window condition variations in previous problems.
                            </p>
                        )}

                    </div>

                </div>


                <div className="recommendation-card">

                    <div className="platform-icon hackerrank">
                        H
                    </div>

                    <div className="problem-content">

                        <h3>
                            Longest Substring Without Repeating Characters
                        </h3>

                        <div className="problem-tags">

                            <span className="difficulty">
                                Medium
                            </span>

                            <span>
                                Strings
                            </span>

                            <span>
                                Sliding Window
                            </span>

                        </div>

                        <p className="recommendation-reason">
                            <strong>Recommended because:</strong>
                            {' '}Helps you understand dynamic window
                            adjustments.
                        </p>

                    </div>

                    <div className="problem-action">

                        <a
                            href="https://www.hackerrank.com/challenges/ctci-longest-substring/problem"
                            target="_blank"
                            rel="noreferrer"
                            className="solve-btn"
                        >
                            Solve on HackerRank ↗
                        </a>

                        <button
                            className="why-btn"
                            onClick={() => setOpenReason(openReason === 2 ? null : 2)}
                        >
                            {openReason === 2 ? 'Hide reason' : 'Why this?'}
                        </button>

                        {openReason === 2 && (
                            <p className="why-reason">
                                This helps you understand how a dynamic sliding window
                                can be adjusted while solving string problems.
                            </p>
                        )}

                    </div>

                </div>


                <div className="recommendation-card">

                    <div className="platform-icon leetcode">
                        LC
                    </div>

                    <div className="problem-content">

                        <h3>
                            Fruit Into Baskets
                        </h3>

                        <div className="problem-tags">

                            <span className="difficulty">
                                Medium
                            </span>

                            <span>
                                Arrays
                            </span>

                            <span>
                                Sliding Window
                            </span>

                        </div>

                        <p className="recommendation-reason">
                            <strong>Recommended because:</strong>
                            {' '}Builds confidence before harder variations.
                        </p>

                    </div>

                    <div className="problem-action">

                        <a
                            href="https://leetcode.com/problems/fruit-into-baskets/"
                            target="_blank"
                            rel="noreferrer"
                            className="solve-btn"
                        >
                            Solve on LeetCode ↗
                        </a>

                        <button
                            className="why-btn"
                            onClick={() => setOpenReason(openReason === 3 ? null : 3)}
                        >
                            {openReason === 3 ? 'Hide reason' : 'Why this?'}
                        </button>

                        {openReason === 3 && (
                            <p className="why-reason">
                                This problem builds confidence with sliding window
                                variations before moving to harder problems.
                            </p>
                        )}

                    </div>

                </div>


            </div>

        </div>
    );
}

export default Recommendations;