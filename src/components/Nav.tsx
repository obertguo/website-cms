import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Nav;