import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import PageHeader from "../component/layout/pageheader";
import HeaderTwo from "../component/layout/header-2";
import toast from "react-hot-toast";
import axios from "axios";
import { API_BASE_URL } from "../utils/utils";

const title = "Register Now";
const btnText = "Get Started Now";

const SignupPage = () => {
  const signup = async (event) => {
    event.preventDefault();
    const form = document.getElementById("signup_form"); // Get the form
    const formData = new FormData(form); // Extract data
    const data = Object.fromEntries(formData); // Convert to an object

    // This will show the form data as an object

    // Email Regux
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    try {
      // Send the data directly (no nested 'data' object)

      if (!emailRegex.test(data.email)) {
        throw new Error("Provide correct email.");
      }

      if (data.password !== data.confirmPassword) {
        throw new Error("Password and Confirm Password Does not match!");
      }

      await axios.post(`${API_BASE_URL}/register_user`, data);

      // Show success toast
      toast.success("Account Created Successfully!");

      setTimeout(() => {
        window.location.href = "/";
      }, 900);
    } catch (error) {
      toast.error(error.response ? error.response.data.message : error.message);
    }
  };
  return (
    <Fragment>
      <HeaderTwo />
      <PageHeader title={"Register Now"} curPage={"Sign Up"} />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" id="signup_form">
              <div className="form-group">
                <input type="text" name="username" placeholder="User Name" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="form-group">
                <button className="lab-btn" onClick={signup}>
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Are you a member? <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignupPage;
