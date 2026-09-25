import AppliedJobList from '../AppliedJobListCard/AppliedJobList.jsx'
import JobHeader from '../JobHeader/JobHeader.jsx'
import { IconBriefcase } from '@tabler/icons-react'
import { useState } from 'react'
import './Hero.css'

export default function Hero(){
    const [jobCount , setJobCount] = useState(5);

    return(
        <div className="hero-dashboard-container">
            <div className='dsh-hero-header'>
                <div className="header-logo-container">
                    <IconBriefcase stroke={2} size={20}/>
                    <h4>Jobs You Have Applied</h4>
                </div>
                <div className="job-count">
                    <span>{jobCount} Jobs applied</span>
                </div>
            </div>
            <AppliedJobList />
        </div>
    );
}