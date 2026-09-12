import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleFeed = () => {
        navigate("/");
    };

    // const handleCreatePost = () => {
    //     navigate("/create-post");
    // };

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <button
                    type="button"
                    className="navbar-logo"
                    onClick={handleFeed}
                >
                    Notes<span>.</span>
                </button>

                <div className="navbar-links">
                    <button
                        type="button"
                        className="nav-link"
                        onClick={handleFeed}
                    >
                        Feed
                    </button>

                    {/* <button
                        type="button"
                        className="nav-link"
                        onClick={handleCreatePost}
                    >
                        Add Post
                    </button> */}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
