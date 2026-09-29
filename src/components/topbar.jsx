import './topbar.css';
import { NavLink } from "react-router-dom";

import {
    MdNotifications,
    MdAccountCircle,
    MdKeyboardArrowDown
} from 'react-icons/md';

function Topbar() {

    return (
        <header className="topbar">

            <div className="logo">
                <span className="logo-icon">🚀</span>
                <span className="logo-text">DSAForge</span>
            </div>

            <div className="rightbar">

                <MdNotifications
                    className="topbar-icon"
                    aria-label="Notifications"
                />

                <NavLink to="/profile" className="profile-link">

                    <MdAccountCircle
                        className="profile-picture"
                        aria-label="User profile"
                    />

                    <MdKeyboardArrowDown className="dropdown-icon" />

                </NavLink>

            </div>

        </header>
    );
}

export default Topbar;