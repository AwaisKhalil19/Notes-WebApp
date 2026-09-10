import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const handleFeed = () => {
        navigate("/");

        console.log("Clicked")
    }




    return (
        <nav className="navbar">
            <div className="navbar-container">

            
                <Link to="/create-post" className="navbar-logo">
                    Notes<span>.</span>
                </Link>

                
                <div className="navbar-links">
                    <button type="button" className="nav-link" onClick={handleFeed}>
                        Feed
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;