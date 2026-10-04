import './RightCardModal.css'
import RightCardModalList from '../RightCardModalList/RightCardModalList';
import { IconSearch , IconFilter } from '@tabler/icons-react';

export default function RightCardModal(){
    const modalHeader = [
        "Interview",
        "Dashboard",
        "Applications"
    ];

    return(
        <div className="right-card-modal-container">
             <div className="right-card-header">
                <div className="segment-inner-container">
                    <div className="modal-red-circle"></div>
                    <div className="modal-green-circle"></div>
                    <div className="modal-orange-circle"></div>
                </div>
                <div className="modal-segment">
                    {modalHeader.map(head => {
                       return <h4 className='segment-text' key={head}>{head}</h4>
                    })}
                    <div className="dot-stack">
                        <div className="dot dot-purple"></div>
                        <div className="dot dot-blue"></div>
                        <div className="dot dot-green"></div>
                    </div>
                </div>
             </div>
             <div className="right-card-hero">
                <div className="right-card-hero-text">
                    <h4 className='right-hero-main-text'>Applications</h4>
                    <span className='right-hero-supporting-text'>18 total · Fall 2026 cycle</span>
                </div>
                <div className="search-filter">
                    <div className="hero-inner-container">
                        <IconSearch stroke={2} size={17}/>
                        <span className='hero-card-text'>Search</span>
                    </div>
                    <div className="hero-inner-container">
                        <IconFilter stroke={2} size={17}/> 
                        <span className='hero-card-text'>Filter</span>
                    </div>
                </div>
             </div>
             <div className="sub-hero">
                <p>Company / Role</p>
                <p>Status</p>
             </div>
             <RightCardModalList />
             <div className="right-card-modal-footer">
                <button className="add-app-inner-container">
                    + Add Application
                </button>
                <div className="modal-footer-text">
                    <p>
                        <span className='count-first'>1</span>
                         offer
                     </p>
                    <span>·</span>
                    <p>
                        <span className='count-second'>3</span> 
                         active
                    </p>
                </div>
             </div>

        </div>
    );
}