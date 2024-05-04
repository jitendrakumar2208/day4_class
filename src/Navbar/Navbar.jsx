import "./navbar.css";
const Navbar = () => {
  return (
    <header className="header">
      <h2>Hootsuite'</h2>
      <nav className="navbar">
        <a href="">Plateform</a>
        <a href="">Plans</a>
        <a href="">Enterprice</a>
        <a href="">Resource</a>
        <a href="">Education</a>
      </nav>

      <div className="buttons">
        <button className="btn">Contact Us</button>
        <button className="btn">Log In</button>
        <button className="btn signup">Sign Up</button>
      </div>
    </header>
  );
};

export default Navbar;
