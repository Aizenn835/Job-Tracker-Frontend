import Logo from '@/assets/brand-logo.svg'
import {IconArrowBarToRight, IconUserPlus} from '@tabler/icons-react'
import LeftCardHeader from '../LeftCardHeader/LeftCardHeader.jsx'
import GoogleLogo from '@/assets/login/Google.png'
import { FaFacebookF } from "react-icons/fa6";
import FooterText from '../FooterText/FooterText.jsx'
import LoginForm from '../LoginForm/LoginForm.jsx'
import SignUpForm from '../SignUpForm/SignUpForm.jsx';
import './LeftCard.css'
import { useState } from 'react'
import { HiH3 } from 'react-icons/hi2'

export default function LeftCard(){
    const [activeForm , setActiveForm] = useState("login");
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
                
                {activeForm === "login" ? 
                <LoginForm /> : 
                <SignUpForm />}

            
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