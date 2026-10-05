import LoginButton from "../LoginButton/LoginButton";
import { validateEmail , validateUsername  , validateName} from "../../../utils/Formatter";
import { IconMail , IconCircleCheck , IconLock , IconEye , IconEyeOff , IconCircleX , IconUser } from '@tabler/icons-react'
import { useState } from "react";

export default function SignUpForm(){
    const [emailInput , setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [usernameInput , setUsernameInput] = useState("");
    const [firstName , setFirstNameInput] = useState("");
    const [lastname , setLastNameInput] = useState("");
    const [isPasswordShown , setIsPasswordShown] = useState(false);
    
    const email = emailInput.trim();
    const password = passwordInput.trim();
    const username = usernameInput.trim();

    const hasMinLength = password.length >= 8;
    const hasNumberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);

    return(
        <form className="auth-form">
            <div className="form-login">
                <div className="content-form">
                    <p>Username</p>
                    <div className="inner-login-form">
                        <IconUser stroke={2} size={19} className='svgIcon'/>
                        <input type="text" 
                               className='input-login-form'
                               placeholder='Alexjohnson'
                               onChange={(e) => {setUsernameInput(e.target.value)}}/>
                        {username.length > 0 && (
                            validateUsername(username) === ""
                                ? <IconCircleCheck stroke={2} size={19} className='form-checkmark' />
                                : <IconCircleX stroke={2} size={19} className='email-invalid' />
                        )}
                    </div>
                </div>
                <div className="content-form">
                    <p>Email</p>
                    <div className="inner-login-form">
                        <IconMail stroke={2} size={19} className='svgIcon'/>
                        <input type="text" 
                               className='input-login-form'
                               placeholder='you@example.com'
                               onChange={(e) => {setEmailInput(e.target.value)}}/>
                               {email.length > 0 && (
                                    validateEmail(email) 
                                        ? <IconCircleCheck stroke={2} size={19} className='form-checkmark' />
                                        : <IconCircleX stroke={2} size={19} className='email-invalid' />
                            )}
                    </div>
                </div>
                <div className="fullname-container">
                    <div className="content-form">
                        <p>Firstname</p>
                        <div className="inner-login-form">
                            <IconUser stroke={2} size={19} className='svgIcon'/>
                            <input type="text" 
                                className='input-login-form'
                                placeholder='Alex'
                                onChange={(e) => {setFirstNameInput(e.target.value)}}/>
                            {firstName.length > 0 && (
                                validateName(firstName) === ""
                                    ? <IconCircleCheck stroke={2} size={19} className='form-checkmark' />
                                    : <IconCircleX stroke={2} size={19} className='email-invalid' />
                            )}
                        </div>
                    </div>
                    <div className="content-form">
                        <p>Lastname</p>
                        <div className="inner-login-form">
                            <IconUser stroke={2} size={19} className='svgIcon'/>
                            <input type="text" 
                                className='input-login-form'
                                placeholder='Johnson'
                                onChange={(e) => {setLastNameInput(e.target.value)}}/>
                            {lastname.length > 0 && (
                                validateName(lastname) === ""
                                    ? <IconCircleCheck stroke={2} size={19} className='form-checkmark' />
                                    : <IconCircleX stroke={2} size={19} className='email-invalid' />
                            )}
                        </div>
                    </div>
                </div>
                <div className="content-form">
                    <p>Password</p>
                    <div className="inner-login-form">
                        <IconLock stroke={2} size={19} className='svgIcon'/>
                        <input type={isPasswordShown ? "text" : "password"} 
                            className='input-login-form'
                            placeholder='Enter your password'
                            onChange={(e) => {setPasswordInput(e.target.value)}}/>
                        {isPasswordShown ? 
                            <IconEyeOff stroke={2} size={19} onClick={() => {setIsPasswordShown(false)}} className='svgIcon'/> : 
                            <IconEye stroke={2} size={19} onClick={() => {setIsPasswordShown(true)}} className='svgIcon'/>
                        }
                    </div>
                    <div className="footer-password-outer-container">
                        <div className={`password-footer-container  ${hasMinLength ? "accepted" : ""}`}>
                            <IconCircleCheck stroke={2} size={15}/>
                            <p>Must be at least 8 characters</p>
                        </div>
                        <div className={`password-footer-container ${hasNumberOrSymbol ? "accepted" : ""}`}>
                            <IconCircleCheck stroke={2} size={15}/>
                            <p>Must contain at least one number or symbol</p>
                        </div>
                    </div>
                </div>
            </div>
            <LoginButton  LoginButtonText={"Create Account"}/>
        </form>
    );
}