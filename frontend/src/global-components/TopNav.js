import { Link } from "react-router-dom";

function TopNav() {
    return (
        <nav className="topNav">
            <Link to='/mall-home'>Mall Home</Link>
            <Link to='/gothic-rex'>Gothic Rex</Link>
            <Link to='/thats-just-dad'>Thats Just Dad</Link>
            <Link to='/pancake-cat'>Pancake Cat</Link>
            <Link to='/suddenly-sarcasim'>Suddenly Sarcasim</Link>
        </nav>
    );
}

export default TopNav;