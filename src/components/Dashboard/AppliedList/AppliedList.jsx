import './AppliedList.css'
import GammaPromotion from '../../../../src/assets/job-img/gamma-promotion.svg'

export default function AppliedList({img , companyName , location}){
    return(
        <div className="applied-list">
            <div className="applied-cell">
                <input type="checkbox" />
            </div>
            <div className="company-name-logo">
                <div className="img-container-list">
                    <img src={img} alt={companyName} className='company-img'/>
                </div>
                <div className="company-info">
                    <h5>{companyName}</h5>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
}