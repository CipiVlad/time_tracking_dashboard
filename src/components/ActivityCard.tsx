import '../scss/ActivityCard.scss'
// import { data } from '../assets/data'
type ActivityProps = {

}
const ActivityCard = (props: ActivityProps) => {
    // console.log(data);

    return (
        <div className="activity_container">
            <div className="activity_heading_flexbox">
                <p className='activity'>Work</p>
                <div className='three_dots'>...</div>
            </div>
            <h2 className="activity_time">32hrs</h2>
            <p className="activity_previous">Last Week - 32hrs</p>
        </div>
    )
}
export default ActivityCard