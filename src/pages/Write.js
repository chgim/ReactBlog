// import Body from "../components/Body";
import Header from "../components/Header";
import { useNavigate  } from "react-router-dom";
import {useState} from 'react';
import Footer from "../components/Footer";
// import Login from "./Login";

function Write(){
    const navigate=useNavigate();
    

    const [form, setForm] = useState({
      title : '',
      content : '',
  })
  const {title, content} = form;
  const onChange = e => {
      const nextForm = {
          ...form,  
          [e.target.name] : e.target.value  
      }
      setForm(nextForm);
  }
  const onClick = () => {
      alert("회원가입 완료"); 
      navigate('/');
      setForm({
          title : '',
          content : '',
          
      })
  }
  const onKeyPress = e => {
      if(e.key === 'Enter'){
          onClick();
      }
  }
    
    
    return(
        <div >
             <Header />
             
        <div className="buttons">
             <button  type="submit"
        style={{width:"90px",height:"25px",borderRadius:"6px", float:"left" ,marginTop:"10px", marginLeft:"50px", marginRight:"15px" }}
          onClick={onClick}
        >
          취소
        </button> 
        <button
        style={{width:"110px",height:"25px",borderRadius:"6px", float:"left" ,margin:" 10px 0px" }}
        >
          이미지 업로드
        </button>
             <button  type="submit"
        style={{width:"90px",height:"25px",borderRadius:"6px", float:"right" ,margin:" 10px 50px" }}
          onClick={onClick}
        >
          작성완료
        </button>
        </div>
        <hr style={{height:"2px", background:"gray", width:"100%"}}/>
        

        <form style={{textAlign:"left",width:"100%", margin:"auto" ,paddingLeft:"50px"}}>
           
           <input 
           style={{width:"80%", height:"30px", marginTop:"5px",marginBottom:"10px" }}
            type = 'text'
            name = 'title'
            required=""
            autoFocus
            placeholder = '제목'
            value = {title}
            onChange = {onChange}
            /><br/>
             
            <textarea
            style={{width:"80%", height:"300px"}}
            type = 'text'
            name = 'content'
            required=""
            placeholder = '내용'
            value = {content}
            onKeyPress = {onKeyPress}
            onChange = {onChange}
            />
            </form>
        
        
        
        <Footer/>
        </div>
   
    );   
    
}
export default Write;