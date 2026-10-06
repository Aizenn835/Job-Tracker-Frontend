import { IconMail, IconCircleCheck, IconLock, IconEye, IconEyeOff, IconCircleX } from '@tabler/icons-react'
import LoginButton from '../LoginButton/LoginButton.jsx'
import { validateEmail, getLoginErrorMessage } from '../../../utils/Formatter.jsx'
import '../../Shared/LoginForm.css'
import { useState } from 'react';
import { login } from '@/api/auth.jsx'
import { useNavigate } from 'react-router-dom';

export default function LoginForm(){
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const email = emailInput.trim();

    const emailError = validateEmail(email) ? "" : "Please enter a valid email address.";
    const passwordError = passwordInput.length === 0 ? "Please enter your password." : "";

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const firstFieldError = emailError || passwordError;
        if(firstFieldError){
            setError(firstFieldError);
            return;
        }

        setIsLoading(true);

        try{
            const data = await login({ email, password: passwordInput });
            localStorage.setItem("token", data.token);
            navigate("/", { replace: true });
        }catch(err){
            setError(getLoginErrorMessage(err));
        }finally{
            setIsLoading(false);
        }
    }

    return(
        <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-login">
                <div className="content-form">
                    <p>Email</p>
                    <div className="inner-login-form">
                        <IconMail stroke={2} size={19} className='svgIcon'/>
                        <input type="text"
                               className='input-login-form'
                               placeholder='you@example.com'
                               value={emailInput}
                               onChange={(e) => {setEmailInput(e.target.value)}}/>
                        {email.length > 0 && (
                            emailError === ""
                                ? <IconCircleCheck stroke={2} size={19} className='form-checkmark' />
                                : <IconCircleX stroke={2} size={19} className='email-invalid' />
                        )}
                    </div>
                    {email.length > 0 && emailError && (
                        <span className="field-error">{emailError}</span>
                    )}
                </div>

                <div className="content-form">
                    <p>Password</p>
                    <div className="inner-login-form">
                        <IconLock stroke={2} size={19} className='svgIcon'/>
                        <input type={isPasswordShown ? "text" : "password"}
                               className='input-login-form'
                               placeholder='Enter your password'
                               value={passwordInput}
                               onChange={(e) => {setPasswordInput(e.target.value)}}/>
                        {isPasswordShown ?
                            <IconEyeOff stroke={2} size={19} onClick={() => {setIsPasswordShown(false)}} className='svgIcon'/> :
                            <IconEye stroke={2} size={19} onClick={() => {setIsPasswordShown(true)}} className='svgIcon'/>
                        }
                    </div>
                </div>
            </div>

            {error && <p className="field-error">{error}</p>}

            <LoginButton LoginButtonText={isLoading ? "Signing in..." : "Sign In"} loading={isLoading}/>
        </form>
    );
}