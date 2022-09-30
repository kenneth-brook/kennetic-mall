import { Link } from "react-router-dom";

function TopNav() {
    return (
        <nav className="topNav">
            <Link to='/mall-home'><p>Mall Home</p></Link>
            <Link to='/gothic-rex'><p>Gothic Rex</p></Link>
            <Link to='/thats-just-dad'><p>Thats Just Dad</p></Link>
            <Link to='/pancake-cat'><p>Pancake Cat</p></Link>
            <Link to='/suddenly-sarcasim'><p>Suddenly Sarcasim</p></Link>
        </nav>
    );
}

export default TopNav;