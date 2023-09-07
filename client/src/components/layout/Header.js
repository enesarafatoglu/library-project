import { Link } from "react-router-dom";

export default function Header() {
  const pathName = window.location.pathname;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My Library
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathName == "/" && "active"}`}
                aria-current="page"
                to="/"
              >
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathName == "/addBook" && "active"}`}
                to="/addBook"
              >
                Add Book
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sections
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="navbar-brand" to="/category/scientific">
                    <span className="a-text">Scientific</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="navbar-brand" to="/category/sports">
                    <span className="a-text">Sports</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="navbar-brand" to="/category/detective">
                    <span className="a-text">Detective</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="navbar-brand" to="/category/Children">
                    <span className="a-text">Children's</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="navbar-brand" to="/category/Horror">
                    <span className="a-text">Horror</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="navbar-brand" to="/category/Tragedy">
                    <span className="a-text">Tragedy</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="navbar-brand" to="/category/Mystery">
                    <span className="a-text">Mystery</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="navbar-brand" to="/category/Science Fiction">
                    <span className="a-text">Science Fiction</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="navbar-brand" to="/category/Western">
                    <span className="a-text">Western</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="navbar-brand" to="/category/Philosophy">
                    <span className="a-text">Philosophy</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div>
            <img className="logo" src="/kitap-logo.png" alt="Kitap Logo"></img>
          </div>
        </div>
      </div>
    </nav>
  );
}
