import './LoginButton.css'
import { IconCircleArrowRight } from '@tabler/icons-react';

export default function LoginButton({LoginButtonText}){
    return(
        <button className="login-button-container">
            <p>{LoginButtonText}</p>
            <IconCircleArrowRight stroke={2} size={18}/>
        </button>
    );
}