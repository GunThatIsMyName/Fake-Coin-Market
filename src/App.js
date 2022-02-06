import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Page
import Hero from "./components/Hero";
import SingleCoin from "./Page/SingleCoin";
import { useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/actions/UserAction";

function App() {
  const getUserData = () => {
    const hello = localStorage.getItem("user_info");
    return JSON.parse(hello);
  };
  const dispatch = useDispatch();
  dispatch(setUserData(getUserData()));
  // const [user,setUser]=useState(getUserData());

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/coin/:id" element={<SingleCoin />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
