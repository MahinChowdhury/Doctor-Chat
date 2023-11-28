import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import loginPageImg from "/loginPageImg3.jpg";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrormsg] = useState("");

  const navigate = useNavigate();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data[1] == 400) {
          console.log("Login Failed", res);
          setErrormsg("Authentication Error, Try again.");
        } else {
          console.log("Login Successfull : ", res.data);
          Cookies.set("username", res.data[1].username);
          Cookies.set("userid", res.data[2].userid);
          navigate("/chat");
        }
      })
      .catch((err) => {
        console.log("Login failed : ", err);
      });
  };

  return (
    <div className="h-screen p-40 px-72">
      <div className="loginContainer border-2 border-gray-700 shadow-2xl flex flex-col md:flex-row justify-stretch items-start">
        <div className="imgpart ">
          <img src={loginPageImg} alt="" className="object-cover" />
        </div>
        <div className="formpart md:w-8/12">
          <form className="form" action="" onSubmit={handleSubmit}>
            <div className="control">
              <h1 className="text-2xl mb-12">Sign In</h1>
            </div>
            <div className="control block-cube block-input">
              <input
                name="email"
                placeholder="Email"
                type="text"
                value={email}
                onChange={handleInput}
              />
              <div className="bg-top">
                <div className="bg-inner"></div>
              </div>
              <div className="bg-right">
                <div className="bg-inner"></div>
              </div>
              <div className="bg">
                <div className="bg-inner"></div>
              </div>
            </div>
            <div className="control block-cube block-input">
              <input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={handleInput}
              />
              <div className="bg-top">
                <div className="bg-inner"></div>
              </div>
              <div className="bg-right">
                <div className="bg-inner"></div>
              </div>
              <div className="bg">
                <div className="bg-inner"></div>
              </div>
            </div>
            <button
              className="btn block-cube block-cube-hover mb-6"
              type="submit"
            >
              <div className="bg-top">
                <div className="bg-inner"></div>
              </div>
              <div className="bg-right">
                <div className="bg-inner"></div>
              </div>
              <div className="bg">
                <div className="bg-inner"></div>
              </div>
              <div className="text">Log In</div>
            </button>
            <div>
              {errormsg && (
                <span className="text-red-600 text-xl">{errormsg}</span>
              )}
            </div>
            <div className="text-center">
              <Link className="text-lg" to="/register">
                Don't have an account?{" "}
                <span className="font-semibold">Register</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
