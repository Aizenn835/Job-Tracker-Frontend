import './LoginButton.css'
import { IconCircleArrowRight } from '@tabler/icons-react';

export default function LoginButton({LoginButtonText , loading}){
    return(
        <button type='submit' className="login-button-container" disabled={loading}>
            <p>{LoginButtonText}</p>
            <IconCircleArrowRight stroke={2} size={18}/>
        </button>
    );
}