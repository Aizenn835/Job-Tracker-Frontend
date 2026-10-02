import './RightCard.css'
import BackgroundImgLogin from '@/assets/login-background.png'

export default function RightCard() {
  return (
    <div className="right-card-container">
        <div className="image-background-container">
            <img src={BackgroundImgLogin} alt="Login Background" className='login-form-img'/>
        </div>
    </div>
  )
}

