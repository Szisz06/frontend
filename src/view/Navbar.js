import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleNavToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                isNavCollapsed ? "" : "show"
              }`}
            >
              <ul className="navbar-nav">
              <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/autos">
                    Autos
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
    </>
  );
};

export default Navbar;