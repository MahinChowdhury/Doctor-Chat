import "./ChatMain.css";
import gptLogo from "/chatgpt.svg";
import addBtn from "/add-30.png";
import msgIcon from "/message.svg";
import home from "/home.svg";
import saved from "/bookmark.svg";
import rocket from "/rocket.svg";

const Sidebar = () => {
  return (
    <div className="sideBar text-md flex flex-col h-screen">
      <div className="upperSide">
        <div className="upperSideTop">
          <img src={gptLogo} alt="Logo" className="logo" />
          <span className="brand">Doctor Health</span>{" "}
        </div>
        <button className="midBtn text-md text-center">
          <img src={addBtn} alt="new chat" className="addBtn text-md" />
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
  );
};

export default Sidebar;
