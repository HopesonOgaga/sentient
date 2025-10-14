import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import Chat from "./pages/chat";
import Home from "./pages";
import Trivia from "./pages/games";
import LeaderboardPage from "./pages/leaderboard";
import TriviaCysic from "./components/cysic/gamecy";
import Sentient from "./components/sentient";
import Cysic from "./components/cysic";
import Fogo from "./components/fogo";
import Ritual from "./components/ritual";
import Allora from "./components/allora";
import Rialo from "./components/rialo";
import Brevis from "./components/brevis";
function App() {
  return (
    <div className="App font-fira ">
       <BrowserRouter >
        <Routes >
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="nav" element={<Navbar></Navbar>}></Route>
          <Route path="chat" element={<Chat></Chat>}></Route>
          <Route path="/game" element={<Trivia></Trivia>}></Route>
          <Route path="/leaderboard" element={<LeaderboardPage></LeaderboardPage>}></Route>
          <Route path="/cysicgame" element={<TriviaCysic></TriviaCysic>}></Route>
          <Route path="/sentient" element={<Sentient></Sentient>}></Route>
          <Route path="/cysic" element={<Cysic></Cysic>}></Route>
          <Route path="/fogo" element={<Fogo></Fogo>}></Route>
          <Route path="/ritual" element={<Ritual></Ritual>}></Route>
          <Route path="/allora" element={<Allora></Allora>}></Route>
          <Route path="/rialo" element={<Rialo></Rialo>}></Route>
          <Route path="/brevis" element={<Brevis></Brevis>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
