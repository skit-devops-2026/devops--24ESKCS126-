import './recommendations.css';

function Recommendations() {
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

                        <button className="solve-btn">
                            Solve on LeetCode ↗
                        </button>

                        <button className="why-btn">
                            Why this?
                        </button>

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

                        <button className="solve-btn">
                            Solve on HackerRank ↗
                        </button>

                        <button className="why-btn">
                            Why this?
                        </button>

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

                        <button className="solve-btn">
                            Solve on LeetCode ↗
                        </button>

                        <button className="why-btn">
                            Why this?
                        </button>

                    </div>

                </div>


            </div>

        </div>
    );
}

export default Recommendations;