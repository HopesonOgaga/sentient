import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import Chat from "./pages/chat";
import Home from "./pages";
import Trivia from "./pages/games";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="nav" element={<Navbar></Navbar>}></Route>
        <Route path="chat" element={<Chat></Chat>}></Route>
        <Route path="/game" element={<Trivia></Trivia>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
