import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import Chat from "./pages/chat";
import Home from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="nav" element={<Navbar></Navbar>}></Route>
        <Route path="chat" element={<Chat></Chat>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
