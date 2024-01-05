import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { DrawerProvider } from "./context/DrawerContext";
import { Basketball } from "./pages/Basketball";
import { Home } from "./pages/Home";
import { Swimming } from "./pages/Swimming";
import { Track } from "./pages/Track";
import { Volleyball } from "./pages/Volleball";

function App() {
  return (
    <>
      <DrawerProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volleyball" element={<Volleyball />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/swimming" element={<Swimming />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </DrawerProvider>
    </>
  );
}

export default App;
