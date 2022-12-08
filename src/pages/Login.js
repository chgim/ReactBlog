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
      localStorage.setItem("user", form.username);
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
    <div style={{}}>
      <div
        className="all"
        style={{
          width: "30%",
          height: "250px",
          marginLeft: "35%",
          marginTop: "14%",
          marginBottom:"100px",
          backgroundColor:"#f4f7fa"
        }}
      >
        <div
          className="logo"
          style={{
            backgroundColor:"#f4f7fa",
            textAlign: "center",
            fontSize: "35px",
            
          }}
        >
         <div className="login" style={{color:"#313031"}}>Time To Travel</div> 
        </div>
        <div
          className="inner"
          style={{ textAlign: "center", marginTop: "15px",padding:"40px", borderRadius:"10px",  border:"3px solid", borderColor:"#313031",backgroundColor:"#f4f7fa" }}
        >
          <form>
            <input
              style={{width:"350px",height:"30px" ,marginBottom:"10px", borderColor:"#313031",backgroundColor:"#f4f7fa"}}
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
              style={{ marginTop: "15px", textAlign: "center" }}
            >
              <button
                type="submit"
                style={{ marginRight: "16px",width:"170px",height:"33px", borderRadius:"3px" ,  cursor:"pointer"}}
                onClick={onClickRegister}
              >
                회원가입
              </button>
              <button
              style={{ width:"170px",height:"33px", borderRadius:"3px",  cursor:"pointer" }}
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