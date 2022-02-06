import React from "react";
import { Link } from "react-router-dom";

// redux
import { useDispatch,useSelector } from "react-redux";
import { setUserData } from "../redux/actions/UserAction";

// styles
import { NavbarWrapper } from "../styles/Navbar.style";

function Navbar() {
  // redux
  const dispatch = useDispatch();
  const {name,money} = useSelector((state) => state.user);

  const handleUser = () => {
    const user = {
      name: "기본 유저",
      money: 10000000,
    };
    localStorage.setItem("user_info", JSON.stringify(user));
    dispatch(setUserData(user));
  };

  // const handleChange = () => {
  //   const newUser = {
  //     name: "변경",
  //     money: userData.moeny,
  //   };
  //   localStorage.setItem("user_info", JSON.stringify(newUser));
  //   // setUser(newUser);
  // };


  return (
    <NavbarWrapper>
      <Link to="/" className="navbar__icon">
        <img
          className="navbar__logo"
          src="https://logos-download.com/wp-content/uploads/2018/04/Binance_logo_coin.png"
          alt="logo"
        />
        <h1 className="navbar__title">FAKE NANCE</h1>
      </Link>

      <div className="navbar__user">
        {name !== "" ? (
          <>
            <div className="user__info">
              <h1>유저 : {name}</h1>
              <h4> 자산 총액 {money} 원</h4>
            </div>
            <Link to="/portfolio">
            <button>자산 포트폴리오</button>
            </Link>
          </>
        ) : (
          <button onClick={handleUser}>Login</button>
        )}
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
