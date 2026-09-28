import SegmentControl from '../SegmentControl/SegmentControl.jsx'
import JobHeader from '../JobHeader/JobHeader.jsx'
import Joblist from '../AppliedList/AppliedList.jsx'
import { IconSearch } from '@tabler/icons-react'
import './AppliedJobList.css'
import FooterPagination from '../Pagination/Pagination.jsx'
import { useEffect, useState } from 'react'
import { getAppliedJobs } from '@/api/dashboard.jsx'

const API_URL = "http://localhost:8080";

export default function AppliedJobList(){
    const [jobs , setJobs] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
        getAppliedJobs()
         .then(setJobs)
         .catch(err => setError(err.message))
         .finally(() => setIsLoading(false))
    } , []);

      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;



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
                {jobs.map(list => (
                    <Joblist key={list.id} 
                             img={`${API_URL + list.imgUrl}`} 
                             companyName={list.companyName}
                             location={list.location}
                             jobTitle={list.jobTitle}
                             minimumSalary={list.minimumSalary}
                             maximumSalary={list.maximumSalary}
                             interviewDate={list.interview_month}
                             interviewType={list.interview_year}
                             stage={list.stage}           
                    />
                
                ))}
            </div>
            <FooterPagination />
        </div>
    );
}