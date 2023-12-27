import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Volleyball } from "./pages/Volleball";
import { Basketball } from "./pages/Basketball";
import { Swimming } from "./pages/Swimming";
import { Track } from "./pages/Track";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/volleyball" element={<Volleyball />} />
      <Route path="/basketball" element={<Basketball />} />
      <Route path="/swimming" element={<Swimming />} />
      <Route path="/track" element={<Track />} />
    </Routes>
  );
}

export default App;
