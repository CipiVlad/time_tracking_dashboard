import '../scss/GridLayout.scss'
import profileImage from '../assets/images/image-jeremy.png'
const GridLayout = () => {
    return (

        <div className="layout_wrapper">
            <div className='parent'>
                <div className="a">
                    <div className='inner_a'>
                        <img src={profileImage} alt="image-jeremy" />
                    </div>
                </div>
                <div className="b">
                    <div className="inner_b">
                    </div>
                </div>
                <div className="c">
                    <div className="inner_c"></div>
                </div>
                <div className="d">
                    <div className="inner_d"></div>
                </div>
                <div className="e">
                    <div className="inner_e"></div>
                </div>
                <div className="f">
                    <div className="inner_f"></div>
                </div>
                <div className="g">
                    <div className="inner_g"></div>
                </div>
                <div className="h">
                    <div className="inner_h"></div>
                </div>
            </div>
        </div>
    )
}
export default GridLayout