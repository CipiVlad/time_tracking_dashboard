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
            <h2 className="activity_time">

                {
                    props.optionTimeFrame === 'daily'
                        ? timeframes.daily.current
                        : props.optionTimeFrame === 'weekly'
                            ? timeframes.weekly.current
                            : timeframes.monthly.current
                } hrs

            </h2>
            <p className="activity_previous">Last Week -
                {
                    props.optionTimeFrame === 'daily'
                        ? timeframes.daily.previous
                        : props.optionTimeFrame === 'weekly'
                            ? timeframes.weekly.previous
                            : timeframes.monthly.previous
                }hrs</p>
        </div>
    )
}
export default ActivityCard