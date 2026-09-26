import GammaPromotion from '@/assets/job-img/gamma-promotion.svg'
import Instagram from '@/assets/job-img/intagram.svg'
import LindkedIn from '@/assets/job-img/linkedin-icon-2.svg'
import Samsung from '@/assets/job-img/samsung.svg'
import Kazanskaya from '@/assets/job-img/kazanskaya-yarmarka.svg'
import MicrosoftTeam from '@/assets/job-img/microsoft-teams.svg'
import Microsoft from '@/assets/job-img/microsoft.svg'
import Visa from '@/assets/job-img/visa.svg'
import ArcticWolf from '@/assets/job-img/arcticwolf.svg'
import PumaLogo from '@/assets/job-img/puma-logo.svg'
import SegmentControl from '../SegmentControl/SegmentControl.jsx'
import JobHeader from '../JobHeader/JobHeader.jsx'
import Joblist from '../AppliedList/AppliedList.jsx'
import { IconSearch } from '@tabler/icons-react'
import './AppliedJobList.css'
import FooterPagination from '../Pagination/Pagination.jsx'

export default function AppliedJobList(){
    const company = [
        {id: 1 , imgSrc: GammaPromotion , jobDsc: "Junior Software Engineer" , companyName: "Gamma Promotion" , location: "London, UK" , salary: "$2500 - $3200" , interviewDate: "16 Mar 2026" , interviewType: "Virtual" , stage: "Pending"},
        {id: 2 , imgSrc: Instagram  , jobDsc: "Data Scientist" , companyName: "Instagram" , location: "California, USA" , salary: "$1200 - $2000" , interviewDate: "19 July 2026" , interviewType: "In Person" , stage: "Rejected"},
        {id: 3 , imgSrc: LindkedIn , jobDsc: "Senior ML Engineer" , companyName: "LinkedIn" , location: "Manila, Philippines" , salary: "$2345 - $4200" , interviewDate: "2 Mar 2026" , interviewType: "Virtual" , stage: "Pending"},
        {id: 4 , imgSrc: Samsung   , jobDsc: "System Integration Specialist" , companyName: "Samsung" , location: "Seoul, Korea" , salary: "$10000 - $12000" , interviewDate: "16 Mar 2026" , interviewType: "Virtual" , stage: "Shortlisted"},
        {id: 5 , imgSrc: MicrosoftTeam  , jobDsc: "AI Scientist" , companyName: "Microsoft Team" , location: "Los Angeles, USA" , salary: "$2821 - $4000" , interviewDate: "16 Mar 2026" , interviewType: "In Person" , stage: "Pending"},  
        {id: 6 , imgSrc: Microsoft  , jobDsc: "Operating System Engineer" , companyName: "Microsoft" , location: "London, UK" , salary: "$6220 - $5200" , interviewDate: "16 Mar 2026" , interviewType: "In Person" , stage: "Pending"},  
        {id: 7 , imgSrc: Visa  , jobDsc: "Junior Web Developer" , companyName: "Visa SE" , location: "Paris, France" , salary: "$4235 - $7012" , interviewDate: "16 Mar 2026" , interviewType: "In Person" , stage: "Shortlisted"},  
        {id: 8 , imgSrc: ArcticWolf  , jobDsc: "Senior Java Developer" , companyName: "Arctic Wolf" , location: "London, UK" , salary: "$2300 - $3200" , interviewDate: "16 Mar 2026" , interviewType: "In Person" , stage: "Pending"},  
        {id: 9 , imgSrc: PumaLogo  , jobDsc: "Machine Learning Engineer" , companyName: "Puma" , location: "Cebu, Philippines" , salary: "$1500 - $6200" , interviewDate: "16 Mar 2026" , interviewType: "In Person" , stage: "Rejected"},
        {id: 10 , imgSrc: Kazanskaya  , jobDsc: "Salesman" , companyName: "Kazanskaya Group" , location: "Osaka, Japan" , salary: "$5000 - $7200" , interviewDate: "16 Mar 2026" , interviewType: "In Person" , stage: "Shortlisted"},    
    ];

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
                {company.map(list => (
                    <Joblist key={list.id} img={list.imgSrc} 
                             companyName={list.companyName}
                             location={list.location}
                             jobTitle={list.jobDsc}
                             salaryRange={list.salary}
                             interviewDate={list.interviewDate}
                             interviewType={list.interviewType}
                             stage={list.stage}           
                    />
                ))}
            </div>
            <FooterPagination />
        </div>
    );
}