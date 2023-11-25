import "./ChatMain.css";
import userIcon from "/user-icon.png";
import gptImgLogo from "/chatgptLogo.svg";

const Chats = ({ messages }) => {
  window.scrollTo(0, document.body.scrollHeight);
  return (
    <div className="chats">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`chat ${
            message.isBot ? "bot bg-blue-900 font-semibold" : "user ml-96"
          }`}
        >
          {message.isBot ? (
            <img className="chatimg" src={gptImgLogo} alt="Bot" />
          ) : (
            <img className="chatimg" src={userIcon} alt="User" />
          )}
          <p className="text-xl text-wrap">{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Chats;
