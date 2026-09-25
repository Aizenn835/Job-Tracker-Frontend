import './Dashboard.css'
import DashboardHeader from './Header/DashboardHeader.jsx'
import DashboardHero from './Hero/Hero.jsx'

export default function Dashboard(){
    return(
        <div className='main-dsh-container'>
        <DashboardHeader />
        <DashboardHero />
        </div>
    );
}