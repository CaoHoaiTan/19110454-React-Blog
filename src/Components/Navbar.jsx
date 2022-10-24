import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h4>19110454 - Cao Hoài Tấn - Blog</h4>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
