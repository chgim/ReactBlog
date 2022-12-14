import { useContext, useEffect, useState } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogStateContext } from "../App";
import Header from "../components/Header";
import Footer from "../components/Footer";







 const env=process.env;
  env.PUBLIC_URL=env.PUBLIC_URL || "";

const Blog = () => {
  const { id } = useParams(); // pathVariable = id
  const blogList = useContext(BlogStateContext); // diaryList 가져오기
  const navigate = useNavigate(); // 이동
  const [data, setData] = useState();
  const [update, setUpdate] = useState(false);
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("commentAll"))
      ? JSON.parse(localStorage.getItem("commentAll")).filter(
          (e) => (e.id = id)
        )
      : []

  );
  const [commentInput, setCommentInput] = useState({
    id: id,
    user: "",
    comment: "",
  });
  const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
  };
  console.log(comments);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("commentAll"))) {
      setComments(
        JSON.parse(localStorage.getItem("commentAll")).filter(
          (e) => (e.id = id)
        )
      );
     
    }
    
  }, [update]);

  useEffect(() => {
    if (blogList.length >= 1) {
      const targetBlog = blogList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      // 현재 상세페이지에서 보여줘야 하는 데이터를 id를 기준으로 찾아온다면
      if (targetBlog) {
        // 일기가 존재할 때
        setData(targetBlog);
      } else {
        // 일기가 없을 때 홈으로 이동
        alert("없는 일기 입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, blogList, navigate]);

  // 데이터가 없으면
  if (!data) {
    return <div className="BlogPage">로딩중입니다...</div>;
  }
  // 데이터가 존재하면
  else {
  







    return (
      <div className="BlogPage">
        
        <Header />
      <div className="all" style={{backgroundColor:"white", width:"50%", marginLeft:"25%", marginTop:"100px", borderRadius:"5px",}}>
        <div className="top" style={{width:"80%", marginLeft:"10%", paddingTop:"40px"}}>
          <div style={{ fontSize:"33px", fontWeight:"bold"}}>{data.title}</div>
           <div style={{marginLeft:"3px",marginTop:"8px", fontWeight:"bold", fontSize:"16px",color:"#404040"}}> {getStringDate(new Date(data.date))}</div>
           <hr style={{width:"100%" ,textAlign:"center", border:"1px solid", background:"#313031", marginBottom:"50px", opacity:"0.3", marginTop:"10px"}}/>
        </div>
        {/* <img  src={process.env.PUBLIC_URL+`images/a${id}.jpg`} alt="fail" style={{width:"90%", height:"480px", opacity:"0.9", marginLeft:"5%", marginBottom:"50px", borderRadius:"5px" }}/> */}
        <img  src="/images/a5.jpg" alt="fail" style={{width:"90%", height:"480px", opacity:"0.9", marginLeft:"5%", marginBottom:"50px", borderRadius:"5px" }}/>
        <div style={{width:"90%", marginLeft:"5%",letterSpacing:"1px", lineHeight:"35px", fontSize:"20px", color:"#202020", paddingBottom:"40px"}}>{data.content}</div>
        </div>
        <div
          className="dat"
          style={{ fontSize: "22px", marginTop: "120px", marginLeft: "50px", marginBottom:"7px", fontWeight:"bold", color:"#313031" }}
        >
          댓글쓰기
        </div>
        <hr style={{ height: "1.4px", background: "#313031", width: "100%" }} />
        <div className="commentAll" >
        
        {comments[0] &&
          comments.map((item) => (
            <div>
              <div className="comments" style={{marginLeft:"50px",}}>
              <div style={{fontWeight:"bold", fontSize:"16px", marginBottom:"5px"}}>{item.user}</div>
              <div style={{fontSize:"14px"}}>{item.comment}</div>
              </div>
              <hr/>  
            </div>
          ))}
          
          </div>
        <input
        style={{width:"10%",height:"22px", marginBottom:"10px", marginLeft:"50px",borderRadius:"3px",marginTop:"20px" }}
          placeholder="작성자"
          type="text"
          value={commentInput.user}
          onChange={(e) => {
            setCommentInput({ ...commentInput, user: e.target.value });
          }}
        /><br/>
        <textarea
          style={{width:"30%", height:"50px", marginLeft:"50px",borderRadius:"3px", display:"block"}}
          placeholder="글을 작성해 주세요."
          value={commentInput.comment}
          onChange={(e) => {
            setCommentInput({ ...commentInput, comment: e.target.value });
          }}
        />
        <button
          style={{width:"90px",height:"25px",borderRadius:"3px",marginLeft:"50px",cursor:"pointer" ,marginTop:"10px"}}
          onClick={() => {
            let commentData = localStorage.getItem("commentAll")
              ? JSON.parse(localStorage.getItem("commentAll"))
              : [];
            commentData.push(commentInput);
            // localStorage.removeItem("commentAll");
            localStorage.setItem("commentAll", JSON.stringify(commentData));
            setUpdate(!update);
            alert("댓글 업로드 완료");
            setCommentInput({
              user: "",
              comment: "",
            });
          }}
        >
          {" "}
          댓글 업로드
        </button>
        <Footer />
        
      </div>
    );
  }
};

export default Blog;