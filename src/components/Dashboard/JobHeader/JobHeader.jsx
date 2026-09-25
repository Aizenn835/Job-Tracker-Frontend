import './JobHeader.css'

export default function JobHeader(){
    return(
        <div className="job-list-header">
            <div className="header-cell checkbox-cell">
                <input 
                    type="checkbox" 
                />
            </div>
            <div className="header-cell company-cell">Company Name</div>
            <div className="header-cell title-cell">Job Title</div>
            <div className="inner-cell">
                <div className="header-cell salary-cell">Salary Range</div>
                <div className="header-cell date-cell">Interview Date</div>
                <div className="header-cell type-cell">Interview Type</div>
                <div className="header-cell stage-cell">Stage</div>
            </div>
        </div>
    );
}