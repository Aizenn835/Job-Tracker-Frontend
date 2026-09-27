import Search from '../SearchDashboard/Search.jsx'
import { IconChartBar ,  IconBell , IconPlus} from '@tabler/icons-react'
import NotificationModal from '../NotifModal/NotifModal.jsx'
import './DashboardHeader.css'
import { useEffect, useState } from 'react'

export default function Dashboard(){
    const [notifCount , setNotifCount] = useState(2);
    const [isModalOpen , setIsModalOpen] = useState(false);

    function counter(){
       setIsModalOpen(!isModalOpen);
    }
    return(
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="text-dsh-container">
                    <IconChartBar stroke={1.90} size={20}/>
                    <h4 className='dashboard-header-text'>Application Overview</h4>
                </div>
                <div className="search-inner-container">
                    <Search />
                    <div className="header-notif-add-container">
                        <div className='icon-dashboard-ntf' onClick={() => {counter()}}>
                            <IconBell stroke={1.90} size={20}/>
                            {notifCount > 0 && (
                                <div className="ntf-counter">
                                  <span>{notifCount}</span>
                                </div>
                            )}
                        </div>
                        <button className='add-btn' title='Add new application'>
                            <IconPlus stroke={2} size={15}/>
                        </button>
                    </div>
                </div>
            </div>
            <NotificationModal isModalOpen={isModalOpen}/>
        </div>
    );
}