import "./App.css";
import Header from "./component/Header";
import Content from "./component/Content";
import Player from "./component/Player";
import Footer from "./component/Footer";
import Search from "./component/Search";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="Wrap">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/search/:params" element={<Search />} />
        </Routes>
      </main>
      <Footer />
      <Player />
    </div>
  );
}

export default App;
