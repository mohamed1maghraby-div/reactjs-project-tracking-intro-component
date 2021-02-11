import react from "react";
import './Body.css';

function Body(){
    return(
        <div className='body'>
            <div className='section-1'>
                <div className='section-1-inner'>
                    <div className='frst-spn'>
                        <span>NEW</span>
                        <span>MONOGRAPH DASHB0ARD</span>
                    </div>
                    <h1>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
                    <p>Project planning and time tracking<br/> gor agile yeams</p>
                    <button>SCHEDULE A DEMO</button>
                    <span>TO SEE A PREVIEW</span>
                </div>
            </div>
            <div className='section-2'>
                <div className='section-2-img'>
                    <img src='images/illustration-devices.svg' alt='illustration-devices'/>
                </div>
            </div>
        </div>
    );
}
export default Body;