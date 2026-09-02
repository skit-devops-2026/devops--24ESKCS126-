import './overview.css'
import {MdCode,MdGpsFixed} from "react-icons/md";


function Overview(){
    const user = {
        name:"Shaili"
    };
    const hour= new Date().getHours();
    let greeting;
    if(hour<12){
        greeting = "Good morning";
    }
    else if(hour<17){
        greeting = "Good afternoon";
    }
    else{
        greeting = "Good evening";
    }
    return(
        <div className="overview">
            <h1>{greeting},{user.name}!</h1>
            <p>You solve.We analyse.You improve.</p>
            <div className='cards'>
                <div className='stat_cards'>
                    <div className='problems_solve'>
                        <div className='icon'>
                            <MdCode size={35}/>
                        </div>
                        <div className='problems_solve_text'>
                            <p className='title'>Problems solved</p>
                            <p className='number'>124</p>
                            <p className='subtitle'>Across plateforms</p>
                        </div>
                    </div>
                    <div className='problems_solve'>
                        <div className='icon'>
                            <MdCode size={35}/>
                        </div>
                        <div className='problems_solve_text'>
                            <p className='title'>Accuracy</p>
                            <p className='number'>72%</p>
                            <p className='subtitle'>(+6% this month)</p>
                        </div>
                    </div>
                    <div className='problems_solve'>
                        <div className='icon'>
                            <MdCode size={35}/>
                        </div>
                        <div className='problems_solve_text'>
                            <p className='title'>Current Streak</p>
                            <p className='number'>14 days</p>
                            <p className='subtitle'>Keep going!</p>
                        </div>
                    </div>
                    <div className='problems_solve'>
                        <div className='icon'>
                            <MdCode size={35}/>
                        </div>
                        <div className='problems_solve_text'>
                            <p className='title'>Total Time</p>
                            <p className='number'>96 hrs</p>
                            <p className='subtitle'>Time spent solving</p>
                        </div>
                    </div>
                </div>
                <div className='recommandation_box'>
                    <div className='recommandation_box_text'>
                        <p className='tagline'>Your Next Step</p>
                        <p className='qtype'>Practice Sliding Window</p>
                        <p className='para_why'>You've solved 4 easy problems but struggled in recent medium ones.
                            DSAForge recommends 3 medium problems to strengthen this concept
                            before moving to Two Pointer.
                        </p>
                        <button>View Recommended Problems </button>
                    </div>
                <div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Overview