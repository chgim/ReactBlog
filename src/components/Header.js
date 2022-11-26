import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { useNavigate  } from "react-router-dom";
// import Login from "../pages/Login";


const Header=()=>{
    const navigate=useNavigate();
    useEffect(() => {
        localStorage.getItem("user") ?  setIsLogin(true) : setIsLogin(false); 
      }, []);

    const [isLogin, setIsLogin] = useState(false);

    return(
        <div>
            <div className="hd1" style={{textAlign:"center", fontSize:"40px" ,margin:"10px",   }}>Time To Travel 
                {isLogin ? (
        <button
        style={{width:"90px",height:"25px",position:"absolute",top:"27px",right:"50px",borderRadius:"6px" }}
          onClick={() => {
            localStorage.removeItem("user");
            alert("로그아웃 되었습니다.");
            navigate('/login');
            // 로그인페이지 이동 ex) navigate("/login")
          }}
        >
          로그아웃
        </button>
      ) : (
        <button
        style={{width:"90px",height:"25px",position:"absolute",top:"27px",right:"50px",borderRadius:"6px"  }}
          onClick={() => {
            navigate('/login');
            //로그인 페이지 이동
          }}
        >
          로그인
        </button>
      )}
            </div>
            <div className="hd2"><img src="images/panorama.jpg" alt="이미지" style={{width:"100%",height:"420px", opacity:"0.8" ,}}></img></div>
            <div className="sc1"></div>
        </div>
    );

};
export default Header;