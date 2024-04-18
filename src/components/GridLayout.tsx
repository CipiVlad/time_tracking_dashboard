import '../scss/GridLayout.scss'
import profileImage from '../assets/images/image-jeremy.png'
import ActivityCard from './ActivityCard'
import workImage from '../assets/images/icon-work.svg'
import playImage from '../assets/images/icon-play.svg'
import studyImage from '../assets/images/icon-study.svg'
import exerciseImage from '../assets/images/icon-exercise.svg'
import socialImage from '../assets/images/icon-social.svg'
import selfCareImage from '../assets/images/icon-self-care.svg'
import { Work, Play, Study, Exercise, Social, SelfCare } from '../assets/data'
import { useState } from 'react'

const GridLayout = () => {

    //switch time frame dynamically
    const chooseTimeFrame = ['Daily', 'Weekly', 'Monthly']
    const [optionTimeFrame, setOptionTimeFrame] = useState<string>()

    // handle chosen time frame
    const handleOptionTimeFrame = (optionTimeFrame: string) => {
        if (optionTimeFrame === 'Daily') {
            setOptionTimeFrame(chooseTimeFrame[0])
        } else if (optionTimeFrame === 'Weekly') {
            setOptionTimeFrame(chooseTimeFrame[1])
        } else if (optionTimeFrame === 'Monthly') {
            setOptionTimeFrame(chooseTimeFrame[2])
        }
    }

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
                        <p className={optionTimeFrame === 'Daily' ? 'active' : ''}
                            onClick={() => handleOptionTimeFrame(chooseTimeFrame[0])} >{chooseTimeFrame[0]}</p>
                        <p className={optionTimeFrame === 'Weekly' ? 'active' : ''} onClick={() => handleOptionTimeFrame(chooseTimeFrame[1])}>{chooseTimeFrame[1]} </p>
                        <p className={optionTimeFrame === 'Monthly' ? 'active' : ''} onClick={() => handleOptionTimeFrame(chooseTimeFrame[2])}>{chooseTimeFrame[2]}</p>
                    </div>
                </div>

                {/* activity cards */}
                <div className="work_card_bg">
                    <img src={workImage} alt="icon-work" width={50} className='activity_image_position' />
                    {Work &&
                        <ActivityCard
                            {...Work}
                            timeframes={Work.timeframes}
                            optionTimeFrame={optionTimeFrame || chooseTimeFrame[0]}
                        />}
                </div>
                <div className="play_card_bg">
                    <img src={playImage} alt="icon-play" width={50} className='activity_image_position' />
                    {
                        Play &&
                        <ActivityCard
                            {...Play}
                            timeframes={Play.timeframes}
                            optionTimeFrame={optionTimeFrame || chooseTimeFrame[0]}
                        />
                    }
                </div>
                <div className="study_card_bg">
                    <img src={studyImage} alt="icon-study" width={50} className='activity_image_position' />
                    {
                        Study &&
                        <ActivityCard
                            {...Study}
                            timeframes={Study.timeframes}
                            optionTimeFrame={optionTimeFrame || chooseTimeFrame[0]}
                        />
                    }
                </div>
                <div className="exercise_card_bg">
                    <img src={exerciseImage} alt="icon-exercise" width={50} className='activity_image_position' />
                    {
                        Exercise &&
                        <ActivityCard
                            {...Exercise}
                            timeframes={Exercise.timeframes}
                            optionTimeFrame={optionTimeFrame || chooseTimeFrame[0]}
                        />
                    }
                </div>
                <div className="social_card_bg">
                    <img src={socialImage} alt="icon-social" width={50} className='activity_image_position' />
                    {
                        Social &&
                        <ActivityCard
                            {...Social}
                            timeframes={Social.timeframes}
                            optionTimeFrame={optionTimeFrame || chooseTimeFrame[0]}
                        />
                    }

                </div>
                <div className="self_care_card_bg">
                    <img src={selfCareImage} alt="icon-self-care" width={50} className='activity_image_position' />

                    {
                        SelfCare &&
                        <ActivityCard
                            {...SelfCare}
                            timeframes={SelfCare.timeframes}
                            optionTimeFrame={optionTimeFrame || chooseTimeFrame[0]}
                        />
                    }
                </div>
            </div>
        </div>
    )
}
export default GridLayout