import { useState } from 'react';
import './SegmentControl.css'

export default function SegmentControl(){
    const segmentValue = ["All", "Pending", "Shortlisted", "Rejected"];
    const [active, setActive] = useState("All");

    return(
       <div className="segment-container">
        {segmentValue.map(value => (
            <button
                className={`segment-btn ${active === value ? 'active' : ''}`}
                key={value}
                onClick={() => setActive(value)}
            >
                {value}
            </button>
        ))}
       </div>
    );
}