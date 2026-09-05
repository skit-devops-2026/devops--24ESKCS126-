import './sidebar.css';
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="logo">
                <span className="logo-icon">🚀</span>
                <span className="logo-text">DSAForge</span>
            </div>

            <nav className="sidebar-nav">

                <NavLink to="/overview">Overview</NavLink>
                <NavLink to="/my-skill-map">My Skill Map</NavLink>
                <NavLink to="/recommendations">Recommendations</NavLink>
                <NavLink to="/activity">Activity</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/setting">Settings</NavLink>
            </nav>

        </aside>
    );
}

export default Sidebar;