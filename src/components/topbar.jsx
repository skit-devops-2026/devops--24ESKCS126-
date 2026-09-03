import './topbar.css';

import {
    MdNotifications,
    MdAccountCircle,
    MdKeyboardArrowDown
} from 'react-icons/md';

function Topbar() {

    return (
        <header className="topbar">

            <div className="rightbar">

                <MdNotifications className="topbar-icon" />

                <MdAccountCircle className="profile-picture" />

                <span className="username">
                    Shaili
                </span>

                <MdKeyboardArrowDown className="dropdown-icon" />

            </div>

        </header>
    );
}

export default Topbar;