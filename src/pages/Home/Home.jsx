import NavBar from '../../components/NavBar/NavBar.jsx'
import Dashboard from '../../components/Dashboard/Dashboard.jsx'
import './Home.css'
export default function Home(){
    return(
       <div className='home-container'>
        <NavBar />
        <Dashboard />
       </div>
    )
}