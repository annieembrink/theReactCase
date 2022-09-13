import { useNavigate } from "react-router-dom";

const Header = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        props.setChosenMovie()
       props.setChosenTime()
       props.setChosenSeats()
       props.setMarked([])
        navigate('/')
    }

    return ( 
        <div>
           
            {/* <div className="headerImgDiv">
                <img className='headerImg' src="https://payload.cargocollective.com/1/11/367710/13568488/MOVIECLASSICSerikweb_2500_800.jpg" alt="" />
                <div className="gradient"></div>
            </div> */}

            <div onClick={handleClick} className="welcome">
                <h3>The Tiny Theatre</h3>
            </div> 
        </div>
    );
}
 
export default Header;