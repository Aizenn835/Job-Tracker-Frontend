import GammaPromotion from '../../../../src/assets/job-img/gamma-promotion.svg'
import SegmentControl from '../SegmentControl/SegmentControl.jsx'
import JobHeader from '../JobHeader/JobHeader.jsx'
import Joblist from '../AppliedList/AppliedList.jsx'
import { IconSearch } from '@tabler/icons-react'
import './AppliedJobList.css'

export default function AppliedJobList(){
    return(
        <div className="applied-job-container">
            <div className="segment-search">
                <SegmentControl />
                <div className="search-list-container">
                    <IconSearch stroke={2} size={20}/>
                    <input className='search-input-jobs' type="text" name="job-list-search" placeholder='Search...'/>
                </div>
            </div>
            <select name="job-filter" className='mobile-view-filter'>
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Rejected">Rejected</option>
            </select>
            <div className="job-table">
                <JobHeader />
                <Joblist img={GammaPromotion} companyName={'Gamma Promotion'} location={"London, UK"}/>
            </div>
        </div>
    );
}