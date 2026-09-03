import './sidebar.css';
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="logo">
                <span className="logo-icon">🚀</span>
                <span className="logo-text">DSAForge</span>
            </div>

            <nav className="sidebar-nav">

                <Link to="/overview">
                    Overview
                </Link>

                <Link to="/my-skill-map">
                    My Skill Map
                </Link>

                <Link to="/recommendations">
                    Recommendations
                </Link>

                <Link to="/activity">
                    Activity
                </Link>

                <Link to="/profile">
                    Profile
                </Link>

                <Link to="/setting">
                    Settings
                </Link>

            </nav>

        </aside>
    );
}

export default Sidebar;