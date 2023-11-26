import "./ChatMain.css";
import gptLogo from "/chatgpt.svg";
import addBtn from "/add-30.png";
import msgIcon from "/message.svg";
import home from "/homebtn.png";
import logoutbtn from "/logoutbtn.png";
import rocket from "/rocket.svg";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Sidebar = ({ onSelectedConversation }) => {
  const [lists, setLists] = useState([]);
  const [conversationIndex, setConversationIndex] = useState(1);

  const handleNewClick = () => {
    const len = lists.length + 1;
    const userid = Cookies.get("userid");
    const newConv = "Conversation - " + len;

    setLists((prevMessages) => [...prevMessages, newConv]);

    console.log("lists:", lists);

    axios
      .post("http://localhost:5000/update_conv_no", {
        userid,
        len,
      })
      .then((res) => {
        console.log("Conversation Number Updated : ", res.data);
      })
      .catch((err) => {
        console.log("Conversation Number Update failed : ", err);
      });
  };

  const handleListClick = (index) => {
    console.log(index);
    setConversationIndex(index);
    onSelectedConversation(index);

    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    const userid = Cookies.get("userid");

    axios
      .get("http://localhost:5000/get_convNumbers", {
        params: {
          userid: userid,
        },
      })
      .then((response) => {
        console.log(response.data);
        const n = response.data.conv_no;

        const convList = [];
        for (let i = 1; i <= n; i++) {
          const newConv = "Conversation - " + i;
          convList.push(newConv);
        }

        setLists(convList);
      })
      .catch((error) => {
        console.error("Error fetching user messages :", error);
      });
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.set("username", "");
    Cookies.set("userid", "");
    navigate("/login");
  };

  window.scrollTo(0, document.body.scrollHeight);
  return (
    <div className="sideBar text-md flex flex-col h-screen">
      <div className="upperSide">
        <div className="upperSideTop">
          <img src={gptLogo} alt="Logo" className="logo" />
          <span className="brand">Doctor Health</span>{" "}
        </div>
        <button className="midBtn text-md text-center" onClick={handleNewClick}>
          <img src={addBtn} alt="new chat" className="addBtn text-md" />
          New Chat
        </button>
        {lists
          .slice(0)
          .reverse()
          .map((list, index) => (
            <div
              className={`upperSideBottom ${
                lists.length - index === conversationIndex
                  ? "border-b-4 border-blue-500"
                  : ""
              }`}
              key={index}
              onClick={() => handleListClick(lists.length - index)}
            >
              <button className="query">
                <img src={msgIcon} alt="Query" />
                {list}
              </button>
            </div>
          ))}
      </div>
      <div className="lowerSide">
        <div className="listItems cursor-pointer" onClick={() => navigate("/")}>
          <img src={home} alt="Home" className="listItemsImg" />
          Home
        </div>
        <div className="listItems cursor-pointer" onClick={handleLogout}>
          <img src={logoutbtn} alt="Saved" className="listItemsImg" />
          Logout
        </div>
        <div className="listItems cursor-pointer">
          <img src={rocket} alt="Rocket" className="listItemsImg" />
          Upgrade to pro
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
