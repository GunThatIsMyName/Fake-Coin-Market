import {BrowserRouter,Routes,Route} from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
