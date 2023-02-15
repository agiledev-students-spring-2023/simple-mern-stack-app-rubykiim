import myImg from './my-img.jpg'
import './AboutUs.css'


const AboutUs = props => {
    return (
        <div className='me'>
            <h2>Hi!<br></br><br></br></h2>
            <img src={myImg} width="10%"></img>
            <p><br></br>My name is Ruby, a senior majoring in Computer Science <br></br>
                with double minor in Interactive Media and Arts & Chinese Language.<br></br>
                I like to hop around cafes and also enjoy scuba diving & walking.
            </p>
        </div>

    )
}

export default AboutUs