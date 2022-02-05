import {BrowserRouter,Routes,Route} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Page
import Hero from "./components/Hero";
import SingleCoin from "./Page/SingleCoin";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/:id" element={<SingleCoin />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;


