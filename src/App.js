import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hakkimizda, SikcaSorulanSorular, Iletisim, GirisYap, Alisveris, Galeri, Home } from './pages/index';
import { NavBar } from "./components";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/sikcasorulansorular" element={<SikcaSorulanSorular />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/girisyap" element={<GirisYap />} />
        <Route path="/alisveris" element={<Alisveris />} />
      </Routes>
    </Router>
  );
}

export default App;
