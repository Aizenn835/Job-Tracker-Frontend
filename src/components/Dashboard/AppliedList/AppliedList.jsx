import './AppliedList.css'
import { IconDotsVertical } from '@tabler/icons-react';

const stageClassMap = {
    "Rejected" : "rejected-color",
    "Pending" : "pending-color",
    "Shortlisted" : "shortlisted-color",
}

export default function AppliedList(props){
    const {
        img ,
        companyName,
        location, 
        jobTitle, 
        salaryRange,
        interviewDate, 
        interviewType ,
        stage
    } = props;

    const stageClass = stageClassMap[stage] || "stage-default";

    return(
        <div className="applied-list">
            <div className="checkbox-cell">
                <input type="checkbox" />
            </div>
            <div className="company-cell">
                <div className="img-container-list">
                    <img src={img} alt={companyName} className='company-img'/>
                </div>
                <div className="company-info">
                    <h5 className='company-name'>{companyName}</h5>
                    <p className='company-location'>{location}</p>
                </div>
            </div>
            <div className="title-cell" data-label="Role">
                <p className='company-job-title'>{jobTitle}</p>
            </div>
            <div className="inner-cell">
                <div className="company-salary" data-label="Pay">{salaryRange}</div>
                <div className="company-date"  data-label="Date">{interviewDate}</div>
                <div className="interview-type" data-label="Mode">{interviewType}</div>
                <div className="interview-stage">
                    <div className='interview-stage-inner-container '>
                        <div className={`stage-status ${stageClass}`}></div>
                        {stage}
                    </div>
                </div>
            </div>
            <div className="option-applied-list">
                <IconDotsVertical stroke={2} size={17}/>
            </div>
        </div>
);
}