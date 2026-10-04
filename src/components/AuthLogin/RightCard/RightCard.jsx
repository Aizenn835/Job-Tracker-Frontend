import BackgroundImgLogin from '@/assets/login-background.png'
import { IconDeviceIpadHorizontalSearch } from '@tabler/icons-react';
import RightCardModal from '../RightCardModal/RightCardModal';
import './RightCard.css'

export default function RightCard() {
  return (
    <div className="right-card-container">
        <div className="image-background-container">
            <img src={BackgroundImgLogin} alt="Login Background" className='login-form-img'/>
        </div>
        <div className="top-left-card-content">
            <IconDeviceIpadHorizontalSearch stroke={2} size={15}/>
            <span className='top-left-content-text'>Interview</span>
        </div>
        <div className="top-right-card-content">
            <div className="green-circle"></div>
            <span className='top-right-content-text'>1 Offer received</span>
        </div>
         <div className="top-second-right-card-content">
            <div className="orange-circle"></div>
            <span className='top-right-content-text'>3 Interviewing</span>
        </div>
        <div className="bottom-left-card-content">
            <div className="bck-card-content">18</div>
            <div className="bottom-inner-container">
              <p className='top-right-content-text'>Applications</p>
              <span className='supporting-top-right-text'>Fall 2026 cycle</span>
            </div>
        </div>
        <RightCardModal />
    </div>
  )
}

