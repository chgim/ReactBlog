import React, { useState } from "react";
import { useNavigate,  } from "react-router-dom";


function Login() {
  const navigate=useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const onClickLogin = () => {
    if (form.username.length < 1) { //미입력시 return
      form.username.current.focus();//해당 텍스트 focus
      return;
    }else if(form.password.length < 1){
      form.password.current.focus();
      return;
    }
      alert(form.username + "님 환영합니다.");
      navigate('/'); //main 이동
      setForm({
        username: "",
        password: "",
      });
    
    
  };
  const onClickRegister = () => {
    navigate('/register');
    setForm({
      username: "",
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
          marginTop: "14%",
          marginBottom:"100px"
        }}
      >
        <div
          className="logo"
          style={{
            textAlign: "center",
            fontSize: "35px",
            
          }}
        >
         <div className="login">Time To Travel</div> 
        </div>
        <div
          className="inner"
          style={{ textAlign: "center", marginTop: "15px",padding:"40px", borderRadius:"12px", borderColor:"#5e4a48", border:"3px solid"  }}
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
                style={{ marginRight: "16px",width:"170px",height:"33px", borderRadius:"6px" ,  cursor:"pointer"}}
                onClick={onClickRegister}
              >
                회원가입
              </button>
              <button
              style={{ width:"170px",height:"33px", borderRadius:"6px",  cursor:"pointer" }}
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