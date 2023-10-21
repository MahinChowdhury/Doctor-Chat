import "./ChatMain.css";
import userIcon from "/user-icon.png";
import gptImgLogo from "/chatgptLogo.svg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="chat">
        <img className="chatimg" src={userIcon} alt="" />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut officiis
          in enim nesciunt dolore voluptate quis quas perspiciatis quo non.
        </p>
      </div>
      <div className="chat bot">
        <img className="chatimg" src={gptImgLogo} alt="" />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, vero
          ullam blanditiis voluptatum perferendis quisquam eius cupiditate nihil
          officiis inventore iure optio itaque ducimus quaerat impedit.
          Inventore temporibus, quaerat earum vero, nulla, labore sint qui error
          alias molestias eum eligendi?
        </p>
      </div>
    </div>
  );
};

export default Chats;
