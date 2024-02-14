import { Routes, Route } from "react-router-dom";

import AllPlayers from "./components/allPlayers/AllPlayers";
import SinglePlayer from "./components/singlePlayer/SinglePlayer";
import NavBar from "./components/navbar/NavBar";
import HeroImg from "./components/hero/HeroImg";
import Poster from "./components/poster/Poster";
import Footer from "./components/footer/Footer";
import NewPlayerForm from "./components/newPlayerForm/NewPlayerForm";

function App() {
    return (
        <div>
            <NavBar />
            <HeroImg />
            <Routes>
                <Route path="/" element={<AllPlayers />} />
                <Route path="/players/:id" element={<SinglePlayer />} />
                <Route path="/addplayer" element={<NewPlayerForm />} />
            </Routes>
            <Poster />
            <Footer />
        </div>
    );
}

export default App;
