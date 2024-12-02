import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../redux/slices/userSlice";

const HeaderTwo = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const logout = () => {
    dispatch(clearUser());
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  return (
    <header
      className={`header-section style-2 ${
        headerFiexd ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div className="header-bottom">
        <div className="header-wrapper">
          <div className="logo-search-acte">
            <div className="logo">
              <Link to="/">
                <img src="assets/images/logo/02.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="menu-area">
            <div className="menu">
              <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                <li className="menu-item-has-children">
                  <a
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-offset="0,0"
                  >
                    Home
                  </a>
                  <ul className="lab-ul dropdown-menu">
                    <li>
                      <NavLink to="/">Home One</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-offset="0,0"
                  >
                    Courses
                  </a>
                  <ul className="lab-ul dropdown-menu">
                    <li>
                      <NavLink to="/course">Course</NavLink>
                    </li>
                    <li>
                      <NavLink to="/course-single">Course Details</NavLink>
                    </li>
                    <li>
                      <NavLink to="/course-view">Course View</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-offset="0,0"
                  >
                    Blog
                  </a>
                  <ul className="lab-ul dropdown-menu">
                    <li>
                      <NavLink to="/blog">Blog Grid</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog-2">Blog Style 2</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog-3">Blog Style 3</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog-single">Blog Single</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-offset="0,0"
                  >
                    Pages
                  </a>
                  <ul className="lab-ul dropdown-menu">
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/team">Team</NavLink>
                    </li>
                    <li>
                      <NavLink to="/instructor">Instructor</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop">Shop Page</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop-single">Shop Details Page</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart-page">Shop Cart Page</NavLink>
                    </li>
                    <li>
                      <NavLink to="/search-page">Search Page</NavLink>
                    </li>
                    <li>
                      <NavLink to="/search-none">Search None</NavLink>
                    </li>
                    <li>
                      <NavLink to="/404">404</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>

            {user.isLoggedIn ? (
              <Link to="/login" className="login">
                <i className="icofont-user"></i> <span>LOG OUT</span>
              </Link>
            ) : (
              <Link to="/login" className="login" onClick={logout}>
                <i className="icofont-user"></i> <span>LOG IN</span>
              </Link>
            )}
            <Link to="/signup" className="signup">
              <i className="icofont-users"></i> <span>SIGN UP</span>{" "}
            </Link>

            <div
              className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
