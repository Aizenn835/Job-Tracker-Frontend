import Logo from '@/assets/brand-logo.svg'
import { IconMail , IconCircleCheck ,IconArrowBarToRight, IconUserPlus ,  IconLock , IconEye , IconEyeOff , IconCircleX} from '@tabler/icons-react'
import LeftCardHeader from '../LeftCardHeader/LeftCardHeader.jsx'
import LoginButton from '../LoginButton/LoginButton.jsx'
import GoogleLogo from '@/assets/login/Google.png'
import { FaFacebookF } from "react-icons/fa6";
import FooterText from '../FooterText/FooterText.jsx'
import { validateEmail} from '@/utils/Formatter.jsx'
import './LeftCard.css'
import { useState } from 'react'

export default function LeftCard(){
    const [activeForm , setActiveForm] = useState("login");
    const [emailInput , setEmailInput] = useState("");
    const [passwordInput , setPasswordInput] = useState("");
    const [isPasswordShown , setIsPasswordShown] = useState(false);
    const formContent = {
        login: {
            header: "Welcome Back",
            supportingText: "Your job search, tracked and organized.",
            footerMainText: "Don't have an account?",
            underLineText: "Sign Up",
            loginButtonText: "Sign In",
        },
        signup: {
            header: "Create Account",
            supportingText: "Start tracking every application in one place.",
            footerMainText: "Already have an account?",
            underLineText: "Log in",
            loginButtonText: "Create Account",
        },
    };
    const current = formContent[activeForm];
    const email = emailInput.trim();
    const password = passwordInput.trim();
    const hasMinLength = passwordInput.length >= 8;
    const hasNumberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(passwordInput);
    
    return(
        <div className="left-card-container">
            <div className="inner-left-card-container">
                <div className="logo-container">
                    <img src={Logo} alt="Website logo" className='logo-img'/>
                </div>
               
                <LeftCardHeader header={current.header} supportingText={current.supportingText}/> 
    
                <div className="form-choice-left-card">
                    <div className={`inner-left-choice-form-container ${activeForm === "login" ? "form-active" : ""}`} onClick={() => {setActiveForm("login")}}>
                        <IconArrowBarToRight stroke={2} size={15} />
                        <span className='form-text'>Login</span>
                    </div>
                     <div className={`inner-left-choice-form-container ${activeForm === "signup" ? "form-active" : ""}`} onClick={() => {setActiveForm("signup")}}>
                        <IconUserPlus stroke={2} size={15}/>
                        <span className='form-text'>SignUp</span>
                    </div>
                </div>
                <div className="form-grid">
                    <div className="form-login-container">
                        <p className='inputIdentifier'>Email</p>
                        <div className="inner-login-form-container">
                            <IconMail stroke={2} size={20} className='email-svg'/>
                            <input type="text" className='form-login-input' placeholder='you@example.com' onChange={(e) => {setEmailInput(e.target.value)}}/>
                            {email.length > 0 && (
                                validateEmail(email) 
                                    ? <IconCircleCheck stroke={2} size={21} className='form-checkmark' />
                                    : <IconCircleX stroke={2} size={21} className='email-invalid' />
                            )}
                        </div>
                    </div>
                    <div className="form-login-container">
                        <p className='inputIdentifier'>Password</p>
                        <div className="inner-login-form-container">
                            <IconLock stroke={2} size={21} className='password-svg'/>
                            <input 
                                type={isPasswordShown ? "text" : "password"} 
                                className='form-login-input' 
                                placeholder='Enter your password' 
                                value={passwordInput}
                                onChange={(e) => {setPasswordInput(e.target.value)}}
                            />
                            {
                            isPasswordShown ?
                            <IconEye stroke={2} size={21} className='show-password' onClick={() => {setIsPasswordShown(false)}}/> : 
                            <IconEyeOff stroke={2} size={21} className='show-password' onClick={() => {setIsPasswordShown(true)}}/> 
                            }
                        </div>
                        <div className="footer-password-outer-container">
                            <div className={`password-footer-container ${hasMinLength ? "requirement-met" : ""}`}>
                                <IconCircleCheck stroke={2} size={15}/>
                                <p>Must be at least 8 characters</p>
                            </div>
                            <div className={`password-footer-container ${hasNumberOrSymbol ? "requirement-met" : ""}`}>
                                <IconCircleCheck stroke={2} size={15}/>
                                <p>Must contain at least one number or symbol</p>
                            </div>
                        </div>
                    </div>
                </div>

                <LoginButton LoginButtonText={current.loginButtonText}/> 
                <div className="continue-container">
                    <div className="separator-login"></div>
                    <span className='continue-text'>Continue With</span>
                    <div className="separator-login"></div>
                </div>
                <div className="oAuth-container">
                    <button className="google-signin-btn">
                        <img src={GoogleLogo} alt="Google OAuth" title='Sign in with Google' className='google-logo'/>
                        <p>Sign in with Google</p>
                    </button>
                    <button className="facebook-signin-btn">
                        <FaFacebookF size={18} color="#ffffff" title='Sign in with facebook'/>
                        <span>Continue with Facebook</span>
                    </button>
                </div>
                <FooterText footerMainText={current.footerMainText} underLineText={current.underLineText}/> 
            </div>
        </div>
    );
}