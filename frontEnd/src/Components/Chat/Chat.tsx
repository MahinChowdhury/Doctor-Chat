import "./Chat.css";
import gptLogo from "/chatgpt.svg";
import addBtn from "/add-30.png";
import msgIcon from "/message.svg";
import home from "/home.svg";
import saved from "/bookmark.svg";
import rocket from "/rocket.svg";
import sendBtn from "/send.svg";
import userIcon from "/user-icon.png";
import gptImgLogo from "/chatgptLogo.svg";

const Chat = () => {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">Doctor Health</span>{" "}
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is programming ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is programming ?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Rocket" className="listItemsImg" />
            Upgrade to pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatimg" src={userIcon} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              officiis in enim nesciunt dolore voluptate quis quas perspiciatis
              quo non.
            </p>
          </div>
          <div className="chat bot">
            <img className="chatimg" src={gptImgLogo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              vero ullam blanditiis voluptatum perferendis quisquam eius
              cupiditate nihil officiis inventore iure optio itaque ducimus
              quaerat impedit. Inventore temporibus, quaerat earum vero, nulla,
              labore sint qui error alias molestias eum eligendi?
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" />
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            Free Research Preview. Doctor Health may produce inaccurate
            information about deases,curing or facts
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
