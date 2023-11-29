import "./ChatMain.css";
// import userIcon from "/user-icon.png";
import gptImgLogo from "/chatgptLogo.svg";
import gojoIcon from "/gojodp.jpg";

const Chats: React.FC<{ messages: { text: string; isBot: boolean }[] }> = ({
  messages,
}) => {
  return (
    <div className="chats">
      <div className="text-blue-600 text-xl text-center text-shadow-2xl font-semibold">
        Please, Provide your symptoms in detail for better results!
      </div>
      <hr />
      {messages.map((message, index) => (
        <div
          key={index}
          className={`chat ${
            message.isBot
              ? "bot bg-blue-300 dark:bg-blue-900 font-bold"
              : "bg-user-light dark:bg-user-dark ml-96"
          }`}
        >
          {message.isBot ? (
            <img className="chatimg" src={gptImgLogo} alt="Bot" />
          ) : (
            <img className="chatimg" src={gojoIcon} alt="User" />
          )}
          <p className="text-2xl text-wrap">{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Chats;
