import "./ChatMain.css";

import sendBtn from "/send.svg";
import Sidebar from "./Sidebar";
import Chats from "./Chats";

const Chat = () => {
  return (
    <div className="App">
      <Sidebar />

      <div className="main">
        <Chats />
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
