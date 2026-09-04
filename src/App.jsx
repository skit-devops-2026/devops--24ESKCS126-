import './App.css';
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar.jsx"
import Sidebar from "./components/sidebar.jsx"
import Overview from "./pages/overview.jsx"
import SkillMap from "./pages/skill_map.jsx"
import Recommendations from "./pages/recommendations.jsx"
import Activity from "./pages/activity.jsx";
import Profile from "./pages/profile.jsx";
import Settings from "./pages/settings.jsx";
import Landing from "./pages/landing.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";

function DashboardLayout(){
    return(
        <div className="app">
            <Sidebar/>
            <div className='main'>
                <Topbar/>
                <div className='content'>
                    <Routes>
                        <Route path="/overview" element={<Overview/>}/>
                        <Route path="/my-skill-map" element={<SkillMap/>}/>
                        <Route path="/recommendations" element={<Recommendations/>}/>
                        <Route path="/activity" element={<Activity/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/setting" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </div>
        
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/*" element={<DashboardLayout />} />
        </Routes>
    );
}
export default App;