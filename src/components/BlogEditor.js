// import Body from "../components/Body";
import Header from "../components/Header";
import { useState, useRef, useContext } from "react";
import { useNavigate  } from "react-router-dom";
import { BlogDispatchContext } from "./../App";
import Footer from "../components/Footer";
// import Login from "./Login";


const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
  };


const BlogEditor=()=>{
    const navigate=useNavigate();
    const [title, setTitle]=useState();
    const [date, setDate] = useState(getStringDate(new Date())); // new Date 오늘 날짜 초기값
    const [content, setContent] = useState(); // textarea 상태 변화 
    const titleRef=useRef();
    const contentRef = useRef(); // textarea 참조
  
    // 작성완료 시 App.js에 전달
  const {onCreate} = useContext(BlogDispatchContext);



//     const [form, setForm] = useState({
//       title : '',
//       content : '',
//   })
//   const {title, content} = form;
  // const onChange = e => {
  //     const nextForm = {
  //         ...form,  
  //         [e.target.name] : e.target.value  
  //     }
  //     setForm(nextForm);
  // }
  const handleSubmit = () => {//완
    if(content.length < 1 || title.length<1) {
      titleRef.current.focus();
      return;
    }
	// 일기 작성 시 날짜, 내용, 감정 onCreate의 인자로
    onCreate(date, title, content);  
    // 작성완료 시 home 화면 이동
    // 일기 작성 옵션 뒤로가기 막기(replace:true)
    navigate('/', {replace:true});
  }
  
    
    
    return(//완
      
        <div >
             <Header />
             
        <div className="buttons">
             <button  type="submit"
        style={{width:"90px",height:"25px",borderRadius:"6px", float:"left" ,marginTop:"10px", marginLeft:"50px", marginRight:"15px" ,  cursor:"pointer"}}
        onClick={()=>navigate(-1)}
        >
          취소
        </button> 
        <button
        style={{width:"110px",height:"25px",borderRadius:"6px", float:"left" ,marginTop:"10px" , cursor:"pointer" }}
        >
          이미지 업로드 {/*이미지 업로드 나중에 구현 */}
        </button>
             <button  type="submit"
        style={{width:"90px",height:"25px",borderRadius:"6px", float:"right" ,margin:"10px 50px" , cursor:"pointer" }}
          onClick={handleSubmit}         >
          작성완료
        </button>
        </div>
        <hr style={{height:"2px", background:"gray", width:"100%"}}/>
        
            {/*여기서부터 폼 */}
        <form style={{textAlign:"left", margin:" auto" ,paddingLeft:"50px"}}>
           
            <input
              className="inputDate"
              style={{width:"10%", height:"30px", marginTop:"10px" ,display:"block" }}
              type="date"
              value={date}
              onChange={(e)=>setDate(e.target.value)} />

           <input 
           style={{width:"70%", height:"30px", marginTop:"10px",marginBottom:"10px" }}
            type = 'text'
            name = 'title'
            required=""
            autoFocus
            placeholder = '제목'
            value = {title}
            ref={titleRef}
            onChange={(e)=>setTitle(e.target.value)}
            /><br/>
             
            <textarea
            style={{width:"70%", height:"300px"}}
            type = 'text'
            name = 'content'
            required=""
            placeholder = '내용'
            value = {content}
            ref={contentRef} //ref가 뭐하는지 아직 모름
            onChange={(e)=>setContent(e.target.value)}
            />
            </form>
        
        
        
        <Footer/>
        </div>
   
    );   
    
}
export default BlogEditor;