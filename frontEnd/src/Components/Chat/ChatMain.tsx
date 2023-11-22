import "./ChatMain.css";
import Sidebar from "./Sidebar";
import Chats from "./Chats";
import { useState } from "react";
import axios from "axios";
import sendBtn from "/send.svg";

const Chat = () => {
  const [typedText, setTypeText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleTypedText = (e) => {
    setTypeText(e.target.value);
  };
  const handleTextSubmit = (e) => {
    e.preventDefault();

    console.log(typedText);

    const userMessage = {
      text: typedText,
      isBot: false,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    console.log(messages);

    axios
      .post("http://localhost:5000/send_msg", {
        typedText,
      })
      .then((res) => {
        console.log(res);
        const responseTypes = ["disease", "causes", "treatment"];

        responseTypes.forEach((type) => {
          let botResponse = res.data[type];
          if (botResponse == "") {
            return;
          }
          let botMessage = {
            text: botResponse,
            isBot: true,
          };

          setMessages((prevMessages) => [...prevMessages, botMessage]);
        });
      })
      .catch((err) => {
        console.log("Message sent failed : ", err);
      });

    setTypeText("");
  };

  return (
    <div className="App">
      <Sidebar />

      <div className="main md:pl-2 lg:pl-80">
        <Chats messages={messages} />
        <div className="chatFooter mt-2">
          <form className="inp text-xl" onSubmit={handleTextSubmit} action="">
            <input
              name="typedText"
              type="text"
              placeholder="Send a message"
              onChange={handleTypedText}
              value={typedText}
            />
            <button className="send" type="submit">
              <img src={sendBtn} alt="Send" />
            </button>
          </form>
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
