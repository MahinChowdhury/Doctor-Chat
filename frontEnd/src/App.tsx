import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import ChatMain from "./Components/Chat/ChatMain";
import Home from "./Components/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
