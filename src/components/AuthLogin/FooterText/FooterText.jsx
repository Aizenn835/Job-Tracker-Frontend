import './FooterText.css'

export default function FooterText({footerMainText , underLineText}){
    return(
        <p className='footer-acc-text'>
             {footerMainText}
            <span className='underline-text'>{underLineText}</span>
        </p>
    );
}