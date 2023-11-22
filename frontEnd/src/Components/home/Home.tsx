import convoImg from "/convo.png";

const Home = () => {
  return (
    <div className="bg-gray-900 h-screen p-10">
      <div>
        <div className="text-3xl text-center">Doctor Health</div>
      </div>
      <div className="flex justify-around">
        <div>Left</div>
        <div>
          <img src={convoImg} alt="" className="w-2/3" />
        </div>
      </div>
      <div>
        <div className="text-center text-2xl">Bottom</div>
      </div>
    </div>
  );
};

export default Home;
