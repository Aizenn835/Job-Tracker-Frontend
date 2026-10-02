import NotFoundDashboard from '@/assets/error-handling-svg/notFoundDsh.svg'
import SegmentControl from '../SegmentControl/SegmentControl.jsx'
import JobHeader from '../JobHeader/JobHeader.jsx'
import Joblist from '../AppliedList/AppliedList.jsx'
import { IconSearch } from '@tabler/icons-react'
import FooterPagination from '../Pagination/Pagination.jsx'
import { useEffect, useState } from 'react'
import { getAppliedJobs ,  searchInCard } from '@/api/dashboard.jsx'
import NoAppliedJobs from '@/assets/error-handling-svg/no-data.svg'
import JobSkeleton from '../../Shared/SkeletonLoading.jsx'
import toast from 'react-hot-toast'
import './AppliedJobList.css'
import ApplicationModal from '../ApplicationModal/ApplicationModal.jsx'

const API_URL = "http://localhost:8080";

export default function AppliedJobList(){
    const [jobs , setJobs] = useState([]);
    const [search , setSearch] = useState("");
    const [isLoading , setIsLoading] = useState(true);


    useEffect(() => {
        let ignore = false;
        const keyword = search.trim();

        const timer = setTimeout(() => {
            const request = keyword ? searchInCard(keyword) : getAppliedJobs();

            request
                .then((data) => {
                    if(ignore) return;
                    setJobs(data);

                })
                .catch((err) => {
                    if(ignore) return;
                    toast.error("Could not load your applied jobs. Please try again.");
                    console.log("Status: " + err.message);
                })
                .finally(() => {
                    if(!ignore) setIsLoading(false);
                })  
        }, keyword ? 400 : 0);

        return () => {
            ignore = true;
            clearTimeout(timer);
        }
    }, [search])

    function renderAppliedList(){
        if (isLoading) {
            return Array.from({ length: 5 }, (_, index) => (
                <JobSkeleton key={index} />
            ));
        }
        if(jobs.length === 0 && search.trim() === ""){
            return <div className="table-message">
                     <img src={NoAppliedJobs} alt="No applied jobs yet." />
                     <p>No applied jobs yet.</p>
                   </div>;
        }
        if(jobs.length === 0 && search.trim()){
            return <div className="table-message">
                     <img src={NotFoundDashboard} alt="No application match." />
                     <p>No application match "{search}" </p>
                   </div>;
        }
        return jobs.map(list => (
                    <Joblist key={list.id} 
                             img={`${API_URL + list.imgUrl}`} 
                             companyName={list.companyName}
                             location={list.location}
                             jobTitle={list.jobTitle}
                             minimumSalary={list.minimumSalary}
                             maximumSalary={list.maximumSalary}
                             interviewDate={list.interviewDate}
                             interviewType={list.interviewType}
                             stage={list.stage}           
                    />
                ));
    }
    return(
        <div className="applied-job-container">
            <div className="segment-search">
                <SegmentControl />
                <div className="search-list-container">
                    <IconSearch stroke={2} size={20}/>
                    <input className='search-input-jobs' type="text" name="job-list-search" placeholder='Search...' onInput={(e) => {setSearch(e.target.value)}}/>
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
                {renderAppliedList()}
            </div>
            <FooterPagination />
        </div>
    );
}