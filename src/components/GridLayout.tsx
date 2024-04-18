import '../scss/GridLayout.scss'
import profileImage from '../assets/images/image-jeremy.png'
import ActivityCard from './ActivityCard'
import workImage from '../assets/images/icon-work.svg'
import playImage from '../assets/images/icon-play.svg'
import studyImage from '../assets/images/icon-study.svg'
import exerciseImage from '../assets/images/icon-exercise.svg'
import socialImage from '../assets/images/icon-social.svg'
import selfCareImage from '../assets/images/icon-self-care.svg'
const GridLayout = () => {
    return (

        <div className="layout_wrapper">
            <div className='parent_grid'>
                {/* area children */}
                <div className="profile_container">
                    <div className='person_details'>
                        <img src={profileImage} alt="image-jeremy" />
                        <p>Report for</p>
                        <p className='frist_name'>Jeremy</p>
                        <p className='last_name'>Robson</p>
                    </div>
                    <div className="timeframe">
                        <p className='daily'>Daily</p>
                        <p className='weekly'>Weekly</p>
                        <p className='monthly'>Monthly</p>
                    </div>
                </div>

                {/* activity cards */}
                <div className="work_card_bg">
                    <img src={workImage} alt="icon-work" width={50} className='activity_image_position' />
                    <ActivityCard />
                </div>
                <div className="play_card_bg">
                    <img src={playImage} alt="icon-play" width={50} className='activity_image_position' />
                    <ActivityCard />
                </div>
                <div className="study_card_bg">
                    <img src={studyImage} alt="icon-study" width={50} className='activity_image_position' />
                    <ActivityCard />
                </div>
                <div className="exercise_card_bg">
                    <img src={exerciseImage} alt="icon-exercise" width={50} className='activity_image_position' />
                    <ActivityCard />
                </div>
                <div className="social_card_bg">
                    <img src={socialImage} alt="icon-social" width={50} className='activity_image_position' />
                    <ActivityCard />
                </div>
                <div className="self_care_card_bg">
                    <img src={selfCareImage} alt="icon-self-care" width={50} className='activity_image_position' />
                    <ActivityCard />
                </div>

            </div>
        </div>
    )
}
export default GridLayout