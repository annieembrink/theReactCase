import { useNavigate } from "react-router-dom";

const Navbar = (props) => {

    const navigate = useNavigate();

    // function onClick() {
    //     props.setChosenMovie(null);
    //     console.log(props.chosenMovie)
    //     console.log(props)
    //     navigate('/')
    // }

    const onClick = () => {
        props.props.setChosenMovie()
        console.log(props.chosenMovie)
        console.log(props)
        navigate('/')
    }

    return (
        <div>
            <nav>
                <button onClick={onClick}>New booking</button>
            </nav>
        </div>
     );
}
 
export default Navbar;