import LeftCard from './LeftCard/LeftCard.jsx'
import RightCard from './RightCard/RightCard.jsx'
import './Login.css'

export default function(){
    return(
        <div className="login-container">
            <LeftCard />
            <RightCard />
        </div>
    );
}