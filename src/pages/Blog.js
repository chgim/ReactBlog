import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogStateContext } from "../App";
import Header from "../components/Header";
import Footer from "../components/Footer";

// import Twittler from "../components/Twittler";

/*Comment 코드 */

/* */

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
    // 오늘의 감정 불러오기

    return (
      <div className="BlogPage">
        <Header />
      
        <div className="top" style={{width:"40%", marginLeft:"30%", marginTop:"100px"}}>
          <div style={{textAlign:"center", fontSize:"36px", fontWeight:"bold"}}>{data.title}</div>
           <div style={{marginLeft:"50px", marginTop:"22px", fontWeight:"bold"}}> {getStringDate(new Date(data.date))}</div>
           <hr style={{width:"90%",marginLeft:"5%", textAlign:"center", border:"1px solid", background:"#313031", marginBottom:"70px"}}/>
        </div>
        <div style={{width:"50%", marginLeft:"25%", fontWeight:"bold",letterSpacing:"1px", lineHeight:"27px"}}>{data.content}</div>
        
        {/* <hr style={{height:"1.2px", background:"#5e4a48", width:"100%"}}/> */}

        <div
          className="title"
          style={{ fontSize: "20px", marginTop: "100px", marginLeft: "50px", marginBottom:"13px" }}
        >
          댓글쓰기
        </div>
        <hr />
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
        style={{width:"8%",height:"20px", marginBottom:"5px", marginLeft:"50px",borderRadius:"3px",marginTop:"20px" }}
          placeholder="작성자"
          type="text"
          value={commentInput.user}
          onChange={(e) => {
            setCommentInput({ ...commentInput, user: e.target.value });
          }}
        /><br/>
        <textarea
          style={{width:"25%", height:"30px", marginLeft:"50px",borderRadius:"3px"}}
          placeholder="글을 작성해 주세요."
          value={commentInput.comment}
          onChange={(e) => {
            setCommentInput({ ...commentInput, comment: e.target.value });
          }}
        /><br/>
        <button
          style={{width:"90px",height:"25px",borderRadius:"3px",marginLeft:"50px",cursor:"pointer" ,}}
          onClick={() => {
            let commentData = localStorage.getItem("commentAll")
              ? JSON.parse(localStorage.getItem("commentAll"))
              : [];
            commentData.push(commentInput);
            localStorage.removeItem("commentAll");
            localStorage.setItem("commentAll", JSON.stringify(commentData));
            setUpdate(!update);
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