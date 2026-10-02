import './LeftCardHeader.css'

export default function LeftCardHeader({header , supportingText}){
    return(
        <div className="header-left-card-container">
            <h2 className='left-header-text'>{header}</h2>
            <p className='left-header-supporting-text'>{supportingText}</p>
        </div>
    );
}
