import { IconArrowAutofitLeft , IconArrowAutofitRight , IconLayoutDashboard , IconBriefcase , IconMessageCircleUser , IconFileCertificate , IconCalendarEvent , IconSettings } from '@tabler/icons-react';
import navLogo from '../../assets/brand-logo.svg'
import { useState } from 'react';
import './NavBar.css'
import defaultProfile from '../../assets/empty-profile-example.jfif'

export default function NavBar(){ 
    const [isNavOpen , setIsNavOpen] = useState(false);

    return(
        //  header
        <div className={isNavOpen ? "navbar-container navbar-toggle" : "navbar-container" } >
            <div className="nav-header">
                <div className="logo-img-container" style={{display:isNavOpen ? "none" : "flex"}}>
                    <h2 style={{display:isNavOpen ? "none" : "flex"}}>interview</h2>
                    <img src={navLogo} alt="Interview" className='nav-logo'style={{display:isNavOpen ? "none" : "flex"}}/>
                </div>
                <div className="minimize-btn" onClick={() => {setIsNavOpen(!isNavOpen)}}>
                    {isNavOpen ?  <IconArrowAutofitRight stroke={2}  size={17}/>  : <IconArrowAutofitLeft stroke={2} size={17}/> }
                </div>
            </div>

            {/* Navigation list */}
            <nav className="nav-list">
                <div style={{display:isNavOpen ? "none" : "block"}}>
                    <h5 className='nav-dsc'>Main</h5>
                    <div className="list-container">
                        <div className="group-nav-container">
                            <IconLayoutDashboard stroke={2} size={18}/>
                            <a className='nav-text'>Dashboard</a>
                        </div>
                    </div>
                    <h5 className='nav-dsc'>Job Board</h5>
                    <div className="list-container">
                        <div className="group-nav-container">
                            <IconBriefcase stroke={2} size={18}/>
                            <a className='nav-text'>Job</a>
                        </div>
                        <div className="group-nav-container">
                            <IconMessageCircleUser stroke={2} size={18}/>
                            <a className='nav-text'>Interviews</a>
                        </div>
                        <div className="group-nav-container">
                            <IconFileCertificate stroke={2} size={18}/>
                            <a className='nav-text' >Saved Resume</a>
                        </div>
                    </div>
                    <h5 className='nav-dsc'>Tools</h5>
                    <div className="list-container">
                        <div className="group-nav-container">
                            <IconCalendarEvent stroke={2} size={18}/>
                            <a className='nav-text'>Calendar & Events</a>
                        </div>
                        <div className="group-nav-container">
                            <IconSettings stroke={2} size={18}/>
                            <a className='nav-text'>Settings</a>
                        </div>
                </div>
                </div>

                {/* Nav close logo */}
                <div className="close-logo-container"  style={{display:isNavOpen ? "block" : "none"}}>
                    <div className="nav-close">
                        <div className="list-container-close">
                            <div className="close-nav-container">
                                <IconLayoutDashboard stroke={2} size={20} title="Dasboard"/>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="list-container-close">
                            <div className="close-nav-container">
                                <IconBriefcase stroke={2} size={20} title="Jobs"/>
                            </div>
                            <div className="close-nav-container">
                                <IconMessageCircleUser stroke={2} size={20} title="Interviews"/>
                            </div>
                            <div className="close-nav-container">
                                <IconFileCertificate stroke={2} size={20} title="Saved Resume"/>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="list-container-close">
                            <div className="close-nav-container">
                                <IconCalendarEvent stroke={2} size={20} title="Calendar & Events"/>
                            </div>
                            <div className="close-nav-container">
                                <IconSettings stroke={2} size={20} title="Settings"/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    ); 
}