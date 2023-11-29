import "./ChatMain.css";
import gptLogo from "/chatgpt.svg";
import addBtn from "/add-30.png";
import msgIcon from "/message.svg";
import home from "/homebtn.png";
import logoutbtn from "/logoutbtn.png";
import rocket from "/space-shuttle-24.png";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Sidebar: React.FC<{
  onSelectedConversation: (index: number) => void;
}> = ({ onSelectedConversation }) => {
  const [lists, setLists] = useState([]);
  const [conversationIndex, setConversationIndex] = useState(1);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editingConversationIndex, setEditingConversationIndex] = useState(-1);

  const userid = Cookies.get("userid");

  const handleNewClick = () => {
    axios
      .post("http://localhost:5000/add_convolist", {
        userid,
      })
      .then((res) => {
        console.log("New conversation added : ", res.data);
        axios
          .get("http://localhost:5000/get_convlist", {
            params: {
              userid: userid,
            },
          })
          .then((response) => {
            //console.log(response.data.convolists);
            setLists(response.data.convolists);
            console.log(lists);
          })
          .catch((error) => {
            console.error("Error fetching user messages :", error);
          });
      })
      .catch((err) => {
        console.log("Conversation Number Update failed : ", err);
      });
  };

  const handleListClick = (index: number) => {
    console.log(index);
    setConversationIndex(index);
    onSelectedConversation(index);

    window.scrollTo(0, document.body.scrollHeight);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.set("username", "");
    Cookies.set("userid", "");
    navigate("/login");
  };

  const handleDelete = (index: number) => {
    axios
      .post("http://localhost:5000/delete_convolist", {
        index,
      })
      .then((res) => {
        console.log("New conversation added : ", res.data);
        axios
          .get("http://localhost:5000/get_convlist", {
            params: {
              userid: userid,
            },
          })
          .then((response) => {
            //console.log(response.data.convolists);
            setLists(response.data.convolists);
            setConversationIndex(lists[lists.length - 2][0]);
            //console.log(lists);
          })
          .catch((error) => {
            console.error("Error fetching user messages :", error);
          });
      })
      .catch((err) => {
        console.log("Conversation Number Update failed : ", err);
      });
  };

  const handleEdit = (index: number) => {
    const conversationToEdit = lists.find(
      (conversation) => conversation[0] === index
    );
    if (conversationToEdit) {
      setEditingConversationIndex(index);
      setIsEditModalOpen(true);
    }
  };

  const handleEditSubmit = () => {
    if (editedName.trim() !== "") {
      axios
        .post("http://localhost:5000/edit_convolist", {
          index: editingConversationIndex,
          newName: editedName,
        })
        .then((res) => {
          console.log("Conversation name updated: ", res.data);
          // Close the modal and fetch updated conversation list
          setIsEditModalOpen(false);
          axios
            .get("http://localhost:5000/get_convlist", {
              params: {
                userid: userid,
              },
            })
            .then((response) => {
              setLists(response.data.convolists);
            })
            .catch((error) => {
              console.error("Error fetching user messages:", error);
            });
        })
        .catch((err) => {
          console.log("Conversation Name Update failed: ", err);
        });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/get_convlist", {
        params: {
          userid: userid,
        },
      })
      .then((response) => {
        //console.log(response.data.convolists);
        setLists(response.data.convolists);
        //console.log("DEBUG : " + lists[0][0]);
        onSelectedConversation(lists[0][0]);
        setConversationIndex(lists[0][0]);
      })
      .catch((error) => {
        console.error("Error fetching user messages :", error);
      });
  }, []);

  window.scrollTo(0, document.body.scrollHeight);
  return (
    <div className="sideBar text-md flex flex-col h-screen">
      <div className="upperSide">
        <div className="upperSideTop">
          <img src={gptLogo} alt="Logo" className="logo" />
          <span className="brand">Doctor Health</span>{" "}
        </div>
        <button
          className="midBtn bg-blue-600 text-md text-center"
          onClick={handleNewClick}
        >
          <img src={addBtn} alt="new chat" className="addBtn text-md" />
          New Chat
        </button>
        {lists
          .slice(0)
          .reverse()
          .map((conversation) => (
            <div
              className={`upperSideBottom ${
                conversation[0] === conversationIndex
                  ? "border-b-4 border-blue-500"
                  : ""
              }`}
              key={conversation[0]}
              onClick={() => handleListClick(conversation[0])}
            >
              <button className="query">
                <div>
                  <img src={msgIcon} alt="Query" />
                </div>
                <div className="ml-8 mr-8">{conversation[1]}</div>
                {isEditModalOpen && conversationIndex == conversation[0] ? (
                  <div className="edit-modal">
                    <input
                      className="text-black bg-gray-300"
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                    <button className="mr-4" onClick={handleEditSubmit}>
                      Save
                    </button>
                    <button onClick={() => setIsEditModalOpen(false)}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex">
                    <button onClick={() => handleEdit(conversation[0])}>
                      <FaEdit />
                    </button>
                    <button
                      className="ml-2"
                      onClick={() => handleDelete(conversation[0])}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                )}
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
