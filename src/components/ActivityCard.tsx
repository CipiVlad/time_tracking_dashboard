import '../scss/ActivityCard.scss'
import { Data } from '../assets/data'


type OptionTimeFrameProps = {
    optionTimeFrame: string
}

const ActivityCard = (props: Data & OptionTimeFrameProps) => {
    const { timeframes } = props

    return (
        <div className="activity_container">
            <div className="activity_heading_flexbox">
                <p className='activity'>{props.title}</p>
                <div className='three_dots'>...</div>
            </div>
            <div className="activity_time_flex_container">
                <h2 className="activity_time">
                    {
                        props.optionTimeFrame === 'Daily'
                            ? timeframes.daily.current
                            : props.optionTimeFrame === 'Weekly'
                                ? timeframes.weekly.current
                                : timeframes.monthly.current
                    }hrs
                </h2>
                <p className="activity_previous">Last Week -
                    {
                        props.optionTimeFrame === 'Daily'
                            ? timeframes.daily.previous
                            : props.optionTimeFrame === 'Weekly'
                                ? timeframes.weekly.previous
                                : timeframes.monthly.previous
                    }hrs</p>
            </div>
        </div>
    )
}
export default ActivityCard