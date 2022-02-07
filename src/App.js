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

// redux
import { useDispatch } from "react-redux";
import { readyreadyready, setUserData } from "./redux/actions/UserAction";
import Portfolio from "./Page/Portfolio";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  console.log("1")
  dispatch(readyreadyready())
  console.log("2")

  const getUserData = () => {
    console.log("App 에서 실행임....")
    const hello = localStorage.getItem("user_info");
    if(!hello){
      return null;
    }
    return JSON.parse(hello);
  };
  
  useEffect(()=>{
    dispatch(setUserData(getUserData()));
  },[])

  // const [user,setUser]=useState(getUserData());

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/coin/:id" element={<SingleCoin />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
