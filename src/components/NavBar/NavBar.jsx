import { IconArrowAutofitLeft , IconArrowAutofitRight , IconLayoutDashboard , IconBriefcase , IconMessageCircleUser , IconFileCertificate , IconCalendarEvent , IconSettings } from '@tabler/icons-react'
import DefaultProfile from '../../assets/profile-picture-static.jpeg'
import NavLogo from '../../assets/brand-logo.svg'
import CloseNav from './NavList/NavClose.jsx'
import NavItem from './NavList/NavList.jsx'
import { useState } from 'react'
import './NavBar.css'


export default function NavBar(){ 
    const [isNavOpen , setIsNavOpen] = useState(false);

    return(
        <div className={isNavOpen ? "navbar-container navbar-toggle" : "navbar-container" } >
            <div className="nav-header">
                <div className="logo-img-container" style={{display:isNavOpen ? "none" : "flex"}}>
                    <h2>interview</h2>
                    <img src={NavLogo} alt="Interview" className='nav-logo'style={{display:isNavOpen ? "none" : "flex"}}/>
                </div>
                <div className="minimize-btn" onClick={() => {setIsNavOpen(!isNavOpen)}}>
                    {isNavOpen ?  <IconArrowAutofitRight stroke={2}  size={17}/>  : <IconArrowAutofitLeft stroke={2} size={17}/> }
                </div>
            </div>

            {/* Navigation list */}
            <nav className="nav-list">
                <div style={{display: isNavOpen ? "none" : "block"}}>
                    <h5 className='nav-dsc'>Main</h5>
                    <div className="list-container">
                        <NavItem icon={<IconLayoutDashboard stroke={2} size={18}/>} value={"Dashboard"}/>
                    </div>
                    <h5 className='nav-dsc'>Job Board</h5>
                    <div className="list-container">
                        <NavItem icon={<IconBriefcase stroke={2} size={18}/>} value={"Job"}/>
                        <NavItem icon={<IconMessageCircleUser stroke={2} size={18}/>} value={"Interviews"}/>
                        <NavItem icon={<IconFileCertificate stroke={2} size={18}/>} value={"Saved Resumes"}/>
                    </div>
                    <h5 className='nav-dsc'>Tools</h5>
                    <div className="list-container">
                         <NavItem icon={<IconCalendarEvent stroke={2} size={18}/>} value={"Calendar & Events"}/>
                         <NavItem icon={<IconSettings stroke={2} size={18}/>} value={"Settings"}/>
                    </div>
                </div>

                {/* Nav close logo */}
                <div className="close-logo-container"  style={{display: isNavOpen ? "block" : "none"}}>
                    <div className="nav-close">
                        <div className="list-container-close">
                            <CloseNav icon={IconLayoutDashboard}  title={"Dashboard"}/>
                        </div>
                        <div className="separator"></div>
                        <div className="list-container-close">
                            <CloseNav icon={IconBriefcase}  title={"Jobs"}/>
                            <CloseNav icon={IconMessageCircleUser}  title={"Interviews"}/>
                            <CloseNav icon={IconFileCertificate}  title={"Saved Resumes"}/>
                        </div>
                        <div className="separator"></div>
                        <div className="list-container-close">
                            <CloseNav icon={IconCalendarEvent}  title={"Calendar & Events"}/>
                            <CloseNav icon={IconSettings}  title={"Settings"}/>
                        </div>
                    </div>
                </div>
                {/* Profile */}
                <div className={`user-profile ${isNavOpen ? "nav-open" : "nav-close"}`}> 
                    <div className="open-profile-container">
                        <img src={DefaultProfile} alt="Default Profile" className='user-profile-img'/>
                        <div className="user-info">
                            <p className='username'>Sarah Dela Cruz</p>
                            <span className='user-email'>sarah.cruz@gmail.com</span>
                        </div>
                    </div>
                    <div className="close-profile-container">
                        <img src={DefaultProfile} alt="Default Profile" className='user-profile-img'/>
                    </div>
                </div>
            </nav>
        </div>
    ); 
}