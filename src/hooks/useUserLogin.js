import { useEffect, useState } from "react"

const getUserData = () => {
    const userData = localStorage.getItem("user_info");
    if(userData ===null){
        return false;
    }
    return JSON.parse(userData);
  };

export const useUserLogin=()=>{
    const [isLoggedIn,setLogin]=useState(false);

    useEffect(()=>{
        setLogin(getUserData());
    },[])

    return [isLoggedIn,setLogin]
}