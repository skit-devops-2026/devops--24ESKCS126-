import './app.css'
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar.jsx"
import Sidebar from "./components/sidebar.jsx"
import Overview from "./pages/overview.jsx"
import SkillMap from "./pages/skill_map.jsx"

function App(){
    return(
        <div className="app">
            <Sidebar/>
            <div className='main'>
                <Topbar/>
                <div className='content'>
                    <Routes>
                        <Route path="/overview" element={<Overview/>}/>
                        <Route path="/my-skill-map" element={<SkillMap/>}/>
                    </Routes>
                </div>
            </div>
        </div>
        
    );
}
export default App;