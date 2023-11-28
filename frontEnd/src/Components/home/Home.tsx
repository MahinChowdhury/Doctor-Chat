import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import chatgptsvg from "/chatgpt.svg";
import convoImg from "/convo.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container min-h-screen min-w-full bg-center bg-cover 
    px-28 relative text-xl"
    >
      <div className="flex items-center">
        <img src={chatgptsvg} className="w-40 cursor-pointer imgSize mt-10" />
        <Navbar />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex-none text-white px-4 mt-10 max-w-xl text-center mx-48">
          <h1 className="text-6xl font-semibold leading-normal mb-4">
            AI Chat that feels surprisingly{" "}
            <span className="font-light">human</span>
          </h1>
          <p>
            Doctor Health is a chatbot for diseases detection,
            <br />
            causes identification and possible treatment suggustion.
          </p>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate("chat")}
              className="bg-blue-600 rounded-3xl py-3 px-8 font-medium 
                inline-block mr-4 hover:bg-transparent hover:border-blue-400 hover:text-white duration-300 hover:border border border-transparent"
            >
              Chat Now
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={convoImg} className="w-full" />
        </div>
      </div>

      {/* Brand Name */}

      <div className="container my-28 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-16 text-3xl font-bold">Trusted by 20000+ users</h2>

          <div className="grid px-6 md:grid-cols-2 lg:grid-cols-6">
            <div className="mx-auto mb-12 lg:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/8.png"
                className="max-w-[90px] dark:brightness-150"
              />
            </div>

            <div className="mx-auto mb-12 lg:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/2.png"
                className="max-w-[90px] dark:brightness-150"
              />
            </div>

            <div className="mx-auto mb-12 lg:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/7.png"
                className="max-w-[90px] dark:brightness-150"
              />
            </div>

            <div className="mx-auto mb-12 lg:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/1.png"
                className="max-w-[90px] dark:brightness-150"
              />
            </div>

            <div className="mx-auto mb-12 lg:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/4.png"
                className="max-w-[90px] dark:brightness-150"
              />
            </div>

            <div className="mx-auto mb-12 lg:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/5.png"
                className="max-w-[90px] dark:brightness-150"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
