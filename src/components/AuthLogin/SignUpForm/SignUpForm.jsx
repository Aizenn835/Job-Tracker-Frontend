import {register} from '@/api/auth.jsx'
import LoginButton from "../LoginButton/LoginButton"
import { validateEmail , validateUsername  , validateName} from "../../../utils/Formatter"
import { IconMail , IconCircleCheck , IconLock , IconEye , IconEyeOff , IconCircleX , IconUser } from '@tabler/icons-react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function SignUpForm(){
    const [emailInput , setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [usernameInput , setUsernameInput] = useState("");
    const [firstNameInput , setFirstNameInput] = useState("");
    const [lastnameInput , setLastNameInput] = useState("");
    const [isPasswordShown , setIsPasswordShown] = useState(false);

    const [error , setError] = useState("");
    const [isLoading , setIsLoading] = useState(false);

    const email = emailInput.trim();
    const password = passwordInput.trim();
    const username = usernameInput.trim();
    const firstname = firstNameInput.trim();
    const lastname = lastnameInput.trim();

    const usernameError = validateUsername(username);
    const emailError = validateEmail(email) ? "" : "Please enter a valid email address.";
    const firstnameError = validateName(firstname);
    const lastnameError = validateName(lastname);

    const hasMinLength = password.length >= 8;
    const hasNumberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const firstFieldError = usernameError || emailError || firstnameError || lastnameError;
        if(firstFieldError){
            setError(firstFieldError);
            return;
        }
        if(!hasMinLength || !hasNumberOrSymbol){
            setError("Password does not meet the requirements.");
            return;
        }

        setIsLoading(true);

        try{
            const data = await register({username , firstname , lastname, email , password: passwordInput});
            localStorage.setItem("token" , data.token);
            navigate("/" , { replace: true });

        }catch(err){
            setError(err.message);
        }finally{
            setIsLoading(false);
        }
    }

    return(
        <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-login">
                <div className="content-form">
                    <p>Username</p>
                    <div className="inner-login-form">
                        <IconUser stroke={2} size={19} className='svgIcon'/>
                        <input type="text"
                               className='input-login-form'
                               placeholder='Alexjohnson'
                               value={usernameInput}
                               onChange={(e) => {setUsernameInput(e.target.value)}}/>
                        {username.length > 0 && (
                            usernameError === ""
                                ? <IconCircleCheck stroke={2} size={19} className='form-checkmark' />
                                : <IconCircleX stroke={2} size={19} className='email-invalid' />
                        )}
                    </div>
                    {username.length > 0 && usernameError && (
                        <span className="field-error">{usernameError}</span>
                    )}
                </div>

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

                <div className="fullname-container">
                    <div className="content-form">
                        <p>Firstname</p>
                        <div className="inner-login-form">
                            <IconUser stroke={2} size={19} className='svgIcon'/>
                            <input type="text"
                                   className='input-login-form'
                                   placeholder='Alex'
                                   value={firstNameInput}
                                   onChange={(e) => {setFirstNameInput(e.target.value)}}/>
                            {firstname.length > 0 && (
                                firstnameError === ""
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
                                   value={lastnameInput}
                                   onChange={(e) => {setLastNameInput(e.target.value)}}/>
                            {lastname.length > 0 && (
                                lastnameError === ""
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
                               value={passwordInput}
                               onChange={(e) => {setPasswordInput(e.target.value)}}/>
                        {isPasswordShown ?
                            <IconEyeOff stroke={2} size={19} onClick={() => {setIsPasswordShown(false)}} className='svgIcon'/> :
                            <IconEye stroke={2} size={19} onClick={() => {setIsPasswordShown(true)}} className='svgIcon'/>
                        }
                    </div>
                    <div className="footer-password-outer-container">
                        <div className={`password-footer-container ${hasMinLength ? "accepted" : ""}`}>
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


            <LoginButton LoginButtonText={isLoading ? "Loading..." : "Create Account"} loading={isLoading}/>
        </form>
    );
}