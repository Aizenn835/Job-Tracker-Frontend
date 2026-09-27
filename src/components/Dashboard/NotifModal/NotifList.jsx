import './NotifList.css'

export default function NotifList({notifImg , name , notifDsc , time , role}){
    return(
        <div className="notif-list-container">
            <div className="notif-list-img-container">
                <img className="notif-img" src={notifImg} alt={name}/>
            </div>
            <div className="inner-name-notif-container">
                <div className="name-dsc-inner-container">
                    <p className="notif-name">{name}</p>
                    <span className="notif-dsc">{notifDsc}</span>
                </div>
                <p className="notif-time-role">{time} | {role}</p>
            </div>
        </div>
    );
}