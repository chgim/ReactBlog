import {useState} from 'react';
import { useNavigate } from "react-router-dom";
// import Footer from '../components/Footer';
// import Login from './Login';

function Register(){
    const navigate=useNavigate();
    const [form, setForm] = useState({
        username : '',
        password : '',
        password2 : '',
        address:''
    })
    const {username,  password,password2, address} = form;
    const onChange = e => {
        const nextForm = {
            ...form,  
            [e.target.name] : e.target.value  
        }
        setForm(nextForm);
    }
    const onClick = () => {
        if ((username.length < 1)||(password.length<1)||(password2.length<1)||(address.length<1)) { 
            form.username.current.focus();
            return;
          }

        alert("회원가입 완료"); 
        navigate('/login');
        setForm({
            username : '',
            password : '',
            password2 : '',
            address:''
        })
    }
    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    }

    return(
        <div>
            <div className="alds" style={{width:"30%",height:"390px" ,margin:"auto",marginTop:"14%",}}>
           <div className="logo2" style={{textAlign:"center",  fontSize:"35px",marginBottom:"15px"}}>Time To Travel</div>
           <div className="inners" style={{textAlign:"left", border:"2px solid black", padding:"40px", borderRadius:"12px"  }}>
           
         <form style={{textAlign:"left",width:"100%", margin:"auto"}}>
           아이디<br/>
           <input 
           style={{width:"350px", height:"25px", marginTop:"5px",marginBottom:"5px"}}
            type = 'text'
            name = 'username'
            required=""
            autoFocus
            placeholder = '아이디'
            value = {username}
            onChange = {onChange}
            /><br/>
             비밀번호<br/>
            <input
            style={{width:"350px", height:"25px",marginTop:"5px",marginBottom:"5px"}}
            type = 'text'
            name = 'password'
            required=""
            placeholder = '비밀번호'
            value = {password}
            onChange = {onChange}
            /><br/>
            비밀번호 확인<br/>
            <input
            style={{width:"350px", height:"25px",marginTop:"5px",marginBottom:"5px"}}
            type = 'text'
            name = 'password2'
            required=""
            placeholder = '비밀번호 확인'
            value = {password2}
            onChange = {onChange}
            /><br/>
             이메일<br/>
            <input
            style={{width:"350px", height:"25px",marginTop:"5px",marginBottom:"5px"}}
            type = 'text'
            name = 'address'
            required=""
            placeholder = '이메일 주소를 입력하세요'
            value = {address}
            onChange = {onChange}
            onKeyPress = {onKeyPress}
            /><br/>
            <button  type="submit" style={{textAlign:"center",width:"358px",height:"33px", margin:"18px auto", borderRadius:"6px"}} onClick = {onClick}>가입하기</button>
            </form>
           </div>
           </div>
           
        </div>
    );

};
export default Register;