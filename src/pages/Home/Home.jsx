import NavBar from '../../components/NavBar/NavBar.jsx'
import Dashboard from '../../components/Dashboard/Dashboard.jsx'
import { Toaster } from "react-hot-toast";
import './Home.css'
export default function Home(){
    return(
       <div className='home-container'>
        <Toaster />
        <NavBar />
        <Dashboard />
       </div>
    )
}