import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <>
      <main>
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
                    Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/auto">
                    Autos
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <article>
          <Outlet />
        </article>

        <footer></footer>
      </main>
    </>
  );
};

export default Layout;

/*<Link className="navbar-brand" to="/">
<img src="./kepek/Logo.png" alt="Welcome here!" />
</Link>*/