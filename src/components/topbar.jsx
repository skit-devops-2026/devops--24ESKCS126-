import './topbar.css';
import { NavLink } from "react-router-dom";

import {
    MdNotifications,
    MdAccountCircle,
    MdKeyboardArrowDown
} from 'react-icons/md';
import { useState } from 'react';
function Topbar() {
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <header className="topbar">

            <div className="rightbar">

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