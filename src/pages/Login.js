import React, { useState } from "react";
import { useNavigate,  } from "react-router-dom";

function Login() {
  const navigate=useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const onClickLogin = () => {
    localStorage.setItem("user", form.userName);
    alert(form.username + "님 환영합니다.");
    navigate('/');
    //main 이동
    setForm({
      uername: "",
      password: "",
    });
  };
  const onClickRegister = () => {
    navigate('/register');
    setForm({
      uername: "",
      password: "",
    });
  };


  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  return (
    <div>
      <div
        className="all"
        style={{
          width: "30%",
          height: "250px",
          marginLeft: "35%",
          marginTop: "18%",
        }}
      >
        <div
          className="logo"
          style={{
            textAlign: "center",
            fontSize: "35px",
            
          }}
        >
          Time To Travel
        </div>
        <div
          className="inner"
          style={{ textAlign: "center", marginTop: "15px", border: "2px solid black",padding:"40px", borderRadius:"12px" }}
        >
          <form>
            <input
              style={{width:"350px",height:"30px" ,marginBottom:"10px"}}
              type="text"
              name="username"
              required=""
              autoFocus
              placeholder="아이디"
              onChange={(e) => {
                setForm({ ...form, username: e.target.value });
              }}
              value={form.username}
            />
            <br />

            <input
            style={{width:"350px",height:"30px",marginBottom:"10px"}}
              type="text"
              name="password"
              required=""
              placeholder="비밀번호"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
             
              onKeyPress={onKeyPress}
            />
            <br />
            <div
              className="button"
              style={{ marginTop: "10px", textAlign: "center" }}
            >
              <button
                type="submit"
                style={{ marginRight: "16px",width:"170px",height:"33px", borderRadius:"6px" }}
                onClick={onClickRegister}
              >
                회원가입
              </button>
              <button
              style={{ width:"170px",height:"33px", borderRadius:"6px" }}
               type="submit"
                onClick={onClickLogin}>
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;