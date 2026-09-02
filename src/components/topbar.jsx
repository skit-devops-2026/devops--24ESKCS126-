import './topbar.css'
import{MdNotifications, MdAccountCircle, MdKeyboardArrowDown} from 'react-icons/md'
function Topbar(){
    return(
        <header className="topbar">
            <div className="rightbar">
                <MdNotifications size={20}/>
                <MdAccountCircle className="profile-picture" />
                <span>Shaili</span>
                <MdKeyboardArrowDown />
            </div>
        </header>
    )
}

export default Topbar;