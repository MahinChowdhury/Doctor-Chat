import "./ChatMain.css";
// import userIcon from "/user-icon.png";
import gptImgLogo from "/chatgptLogo.svg";
import gojoIcon from "/gojodp.jpg";

const Chats: React.FC<{ messages: { text: string; isBot: boolean }[] }> = ({
  messages,
}) => {
  return (
    <div className="chats">
      <div className="text-lg text-slate-300 text-center text-shadow-2xl font-semibold">
        Please, Provide your symptoms in detail for better results!
      </div>
      <hr />
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
            <img className="chatimg" src={gojoIcon} alt="User" />
          )}
          <p className="text-xl text-wrap">{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Chats;
