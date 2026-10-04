import './RightCardModalList.css'

export default function RightCardModalList(){
    return(
        <div className="card-modal-list">
            <div className="right-list">
                <div className="right-card-logo-container first-logo">
                    <span>S</span>
               </div>
                <div className="card-modal-list-inner-container">
                    <div className="name-role-container">
                        <p className='card-company-name'>Stripe</p>
                        <span className='card-role'>Software Engineer II</span>
                    </div>
                    <div className="right-card-status">
                        <span className='card-status interview'>Interviewing</span>
                    </div>
                </div>
            </div>
            <div className="right-list">
                <div className="right-card-logo-container second-logo">
                    <span>V</span>
               </div>
                <div className="card-modal-list-inner-container">
                    <div className="name-role-container">
                        <p className='card-company-name'>Vercel</p>
                        <span className='card-role'>Frontend Engineer</span>
                    </div>
                    <div className="right-card-status">
                        <span className='card-status shortlisted'>Shortlisted</span>
                    </div>
                </div>
            </div>
            <div className="right-list">
                <div className="right-card-logo-container third-logo">
                    <span>L</span>
               </div>
                <div className="card-modal-list-inner-container">
                    <div className="name-role-container">
                        <p className='card-company-name'>Linear</p>
                        <span className='card-role'>Product Engineer</span>
                    </div>
                    <div className="right-card-status">
                        <span className='card-status rejected'>Rejected</span>
                    </div>
                </div>
            </div>
            <div className="right-list">
                <div className="right-card-logo-container fourth-logo">
                    <span>F</span>
               </div>
                <div className="card-modal-list-inner-container">
                    <div className="name-role-container">
                        <p className='card-company-name'>Figma</p>
                        <span className='card-role'>Designer</span>
                    </div>
                    <div className="right-card-status">
                        <span className='card-status interview'>Interviewing</span>
                    </div>
                </div>
            </div>
        </div>
    );
}