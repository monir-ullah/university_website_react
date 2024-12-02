import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import { useSelector, useDispatch } from "react-redux";
import { setUser, clearUser } from "../redux/slices/userSlice";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../utils/utils";
import axios from "axios";

const title = "Login";

const btnText = "Submit Now";

const LoginPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const login = async (event) => {
    event.preventDefault();
    const form = document.getElementById("login_form"); // Get the form
    const formData = new FormData(form); // Extract data
    const data = Object.fromEntries(formData); // Convert to an object

    console.log(data); // This will show the form data as an object

    try {
      // Send the data directly (no nested 'data' object)
      const response = await axios.post(`${API_BASE_URL}/login_user`, data);

      console.log("Response:", response.data);

      // Dispatch user info if login is successful
      dispatch(
        setUser({
          username: response.data.user.username,
          email: response.data.user.email,
        })
      );

      // Show success toast
      toast.success("Login Successful!");
    } catch (error) {
      toast.error(error.response ? error.response.data.message : error.message);
    }
  };

  const logout = () => {
    dispatch(clearUser());
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={"Login Page"} curPage={"Login"} />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" id="login_form">
              <div className="form-group">
                <input type="text" name="username" placeholder="User Name *" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link to="/forgetpass">Forget Password?</Link>
                </div>
              </div>
              <div className="form-group text-center">
                <button className="d-block lab-btn" onClick={login}>
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don’t Have any Account? <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;
