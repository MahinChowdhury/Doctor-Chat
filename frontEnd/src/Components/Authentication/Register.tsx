import { useState } from "react";
import "./Login.css";
import registerImg from "/registerPageImg8.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      setEmailError("");
    } else if (name === "password") {
      setPassword(value);
      setPasswordError("");
    } else if (name === "username") {
      setUsername(value);
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    let isValid = true;

    if (email.trim() === "") {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format.");
      isValid = false;
    } else {
      setEmailError(""); // Clear the error when the input is valid
    }

    if (password.trim() === "") {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      isValid = false;
    } else {
      setPasswordError(""); // Clear the error when the input is valid
    }
    if (isValid) {
      console.log("Valid mail and password.");
      axios
        .post("http://localhost:5000/register", {
          username,
          email,
          password,
        })
        .then((res) => {
          console.log("Registration Successfull : ", res.data);
          navigate("/login");
        })
        .catch((err) => {
          console.log("Registation failed : ", err);
        });
    }
  };

  return (
    <div className="h-screen p-40 px-72">
      <div className="loginContainer border-2 border-gray-700 shadow-2xl flex flex-col lg:flex-row justify-stretch items-start">
        <div className="imgpart ">
          <img src={registerImg} alt="" className="object-cover" />
        </div>
        <div className="formpart md:w-8/12">
          <form className="form" action="" onSubmit={handleSubmit}>
            <div className="control">
              <h1 className="text-2xl mb-12">Register</h1>
            </div>
            <div className="control block-cube block-input">
              <input
                name="username"
                placeholder="Username"
                type="text"
                value={username}
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
              <div className="text">Sign Up</div>
            </button>
            <div>
              {emailError && (
                <span className="text-red-600 text-xl">{emailError}</span>
              )}
            </div>
            <div>
              {passwordError && (
                <span className="text-red-600 text-xl">{passwordError}</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
