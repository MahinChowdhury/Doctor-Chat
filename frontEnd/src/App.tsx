import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Components/Chat/Chat";
import Home from "./Components/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
