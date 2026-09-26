import { IconArrowNarrowLeft , IconArrowNarrowRight } from '@tabler/icons-react';
import './Pagination.css'

export default function Pagination(){
    return(
        <div className="footer-pagination-container">
            <button className="footer-btn">
                <IconArrowNarrowLeft stroke={2} size={25}/> 
                <span className='footer-btn-text'>Previous</span>
            </button>
            <div className="pagination-count">
                <div className="count">1</div>
                <div className="count">2</div>
                <div className="count">3</div>
                <div className="count">...</div>
                <div className="count">8</div>
                <div className="count">9</div>
                <div className="count">10</div>
            </div>
            <button className="footer-btn">
                <span className='footer-btn-text'>Next</span>
                <IconArrowNarrowRight stroke={2} size={25}/>
            </button>
        </div>
    );
}