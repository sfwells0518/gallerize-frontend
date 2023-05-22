export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Gallerize ||
        </a>
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
          <ul className="nav nav-underline">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-primary"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Art Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Paintings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Photography
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Digital Art
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center align-items-center my-3">
          {" "}
          <form className="d-flex" role="search">
            <input className="form-control me-2 center-placeholder" type="search" placeholder="" aria-label="Search" />
            <button className="red-search-button" type="submit">
              Search
            </button>
          </form>
        </div>
        <ul className="navbar-nav ml-auto justify-content-end">
          <li className="nav-item">
            <a className="nav-link text-primary" href="#">
              <img
                src="https://previews.123rf.com/images/vectorlightstudio/vectorlightstudio2001/vectorlightstudio200100102/144161554-shopping-cart-icon.jpg"
                alt="Cart"
                style={{ width: "23px", marginRight: "5px" }}
              />
              Cart
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-primary"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profile
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Sign Up
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Log In
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Log Out
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
