import NotificationList from './NotifList.jsx'
import NotifImgOne from '@/assets/notif-list/Photo1.jfif'
import NotifImgTwo from '@/assets/notif-list/Photo2.jfif'
import NotifImgThree from '@/assets/notif-list/Photo3.jfif'
import './NotifModal.css'
import { useState } from 'react'

export default function NotifModal({isModalOpen}){
    const notifList = [
        {img: NotifImgOne , name: "Juan Cruz" , dsc: "updated the task #0293843" , time: "5 min ago" , role: "Product Design Team"},
        {img: NotifImgTwo , name: "Nico Rivera" , dsc: "updated the task #0212381" , time: "20 min ago" , role: "Lead Data Scientist"},
        {img: NotifImgThree , name: "Carlo DelaCruz " , dsc: "updated the task #1293843" , time: "7 min ago" , role: "UI UX Designer"},
    ];
    const [activeTab , setActiveTab] = useState("All");


    return(
        <div className={`notif-modal ${isModalOpen ? "notif-active-state" : ""}`}>
            <div className="notif-modal-header">
                <h3>Notification</h3>
                <span>Mark all as read</span>
            </div>
            <div className="eyebrow">
                <div className={`active-tab ${activeTab === "All" ? "active" : ""}`} onClick={() => {setActiveTab("All")}}>
                    <span>All</span>
                </div>
                <div className={`active-tab ${activeTab === "Unread" ? "active" : ""}`} onClick={() => {setActiveTab("Unread")}}>
                    <span>Unread</span>
                </div>
            </div>
            <div className="notif-list">
                {notifList.map(list => (
                    <NotificationList key={list.name}
                                      notifImg={list.img} 
                                      name={list.name} 
                                      notifDsc={list.dsc} 
                                      time={list.time} 
                                      role={list.role}
                    />
                ))}
            </div>
            <div className="notif-btn-container">
                <button className='see-all-notif-btn'>See All Notification</button>
            </div>
        </div>
    );
}