import './NavClose.css'

export default function NavClose({icon: Icon , title}){
    return(
        <div className="close-nav-container">
            <Icon stroke={2} size={20} title={title}/>
        </div>
    );
}