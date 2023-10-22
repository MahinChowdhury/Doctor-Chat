import "./Login.css";
import loginPageImg from "/loginPageImg3.jpg";

const Login = () => {
  return (
    <div className="h-screen p-40 px-72">
      <div className="loginContainer border-2 border-gray-700 shadow-2xl flex flex-col md:flex-row justify-stretch items-start">
        <div className="imgpart ">
          <img src={loginPageImg} alt="" className="object-cover" />
        </div>
        <div className="formpart md:w-8/12">
          <form className="form">
            <div className="control">
              <h1 className="text-2xl mb-12">Sign In</h1>
            </div>
            <div className="control block-cube block-input">
              <input name="email" placeholder="Email" type="text" />
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
              <input name="password" placeholder="Password" type="password" />
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
            <button className="btn block-cube block-cube-hover" type="button">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
