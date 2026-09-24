import './NavList.css'
export default function NavList({icon , value}){

    return(
        <div className="group-nav-container">
            {icon}
            <a className='nav-text'>{value}</a>
        </div>
    );
}