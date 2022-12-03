// import Body from "../components/Body";
import Header from "../components/Header";
import { useState, useRef, useContext, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import { BlogDispatchContext } from "./../App";
import Footer from "../components/Footer";
import EditorButton from "./EditorButton";
// import Login from "./Login";


const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
  };


const BlogEditor=({isEdit, originData})=>{
    const navigate=useNavigate();
    const [title, setTitle]=useState();
    const [date, setDate] = useState(getStringDate(new Date())); // new Date 오늘 날짜 초기값
    const [content, setContent] = useState(); // textarea 상태 변화 
    const titleRef=useRef();
    const contentRef = useRef(); // textarea 참조
  
    // 작성완료 시 App.js에 전달
  const {onCreate, onEdit, onRemove} = useContext(BlogDispatchContext);

  const handleSubmit = () => {//완
    if(content.length < 1 || title.length<1) {
      alert("제목과 내용을 입력해 주세요");
      titleRef.current.focus();
      return;
    }
    if(window.confirm(isEdit ? "글을 수정하시겠습니까?" : "새로운 글을 작성하시겠습니까?")){
      // 새 일기 작성인 경우(수정이 아닌 경우)
      if(!isEdit) {
        onCreate(date, title, content);
      }
      // 수정중인 경우 (onEdit의 props : 원본 id, 날짜, 내용, 감정)
      else {
        onEdit(originData.id, date, title, content);
      }
    };
    // onCreate(date, title, content);  
 
    
    navigate('/', {replace:true});
  
  };

  const handleRemove = () => {
    
      if(window.confirm("정말 삭제하시겠습니까?")) {
        onRemove(originData.id);
        navigate('/',{replace:true});
    }
  
  };


  useEffect(()=>{
    if(isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setTitle(originData.title);
      setContent(originData.content);
    }
  },[isEdit, originData]);

  const imgUpload=()=>{
    alert("이미지 업로드 완료");
  };

    
    return(//완
      
        <div >
             <Header />
             
        <div className="buttons">
             <button  type="submit"
        style={{width:"90px",height:"25px",borderRadius:"6px", float:"left" ,marginTop:"10px", marginLeft:"50px", marginRight:"15px" ,  cursor:"pointer" ,}}
        onClick={()=>navigate(-1)}
        >
          취소
        </button> 
        <button
        style={{width:"110px",height:"25px",borderRadius:"6px", float:"left" ,marginTop:"10px" , cursor:"pointer" }}
        onClick={imgUpload} 
        >
          이미지 업로드 {/*이미지 업로드 나중에 구현 */}
        </button>
        <button  type="submit"
        style={{width:"90px",height:"25px",borderRadius:"6px", float:"right" ,marginTop:"10px", marginBottom:"10px" ,marginRight:"50px",marginLeft:"20px", cursor:"pointer" }}
          onClick={handleSubmit}         >
          작성완료
        </button>
        
       
      <EditorButton btn={isEdit &&<button 
        style={{width:"90px",height:"25px",borderRadius:"6px", cursor:"pointer",margin:"10px 0px", float:"right" }}
        onClick={handleRemove}
        >
        삭제하기
        </button> }/> {/*edit 페이지에서만 버튼 활성화 */}
        
             
        </div>
        <hr style={{height:"1.2px", background:"#5e4a48", width:"100%"}}/>
        
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