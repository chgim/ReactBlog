import { useContext, useEffect, useState,  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {   BlogStateContext } from "../App";

// import { getStringDate } from "../util/date";
// import { emotionList } from "../util/emotion";

import Header from "../components/Header";
import Footer from "../components/Footer";
// import CommentList from "../components/CommentList";



const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
  };
  

const Blog = () => {
  // const [title2, setTitle2]=useState();
  // const [date2, setDate2] = useState(getStringDate(new Date())); // new Date 오늘 날짜 초기값
  // const [content2, setContent2] = useState(); // textarea 상태 변화 
  // const title2Ref=useRef();
  // const content2Ref = useRef(); // textarea 참조

  const { id } = useParams(); // pathVariable = id
  const blogList = useContext(BlogStateContext); // diaryList 가져오기
  const navigate = useNavigate(); // 이동
  const [data, setData] = useState();

  // const {onCreate2} = useContext(BlogDispatchContext);

  // const handleSubmit2 = () => {//완
  //   if(content2.length < 1 || title2.length<1) {
  //     title2Ref.current.focus();
  //     return;
  //   }
  //       onCreate2(date2, title2, content2);
  
  // };

 

  // const commentList=useContext(BlogStateContext);
  
  //     useEffect(()=>{
  //       setData(commentList)
  //   },[commentList]);

  //   useEffect(()=>{
  //       console.log(data);
  //     },[data]);










  // 데이터는 컴포넌트가 mount된 시점에서 가져온다
  // 조건 : 일기데이터가 1개라도 있을 때만 가져온다 (id 오류 방지 형변환)
  // deps : id나 diaryList가 변할 때만 가져온다
  useEffect(()=>{
    if(blogList.length >= 1) {
      const targetBlog = blogList.find((it)=>parseInt(it.id) === parseInt(id));
      console.log(targetBlog); // 가져온 id의 일기데이터 출력

      // 현재 상세페이지에서 보여줘야 하는 데이터를 id를 기준으로 찾아온다면 
      if(targetBlog) { // 일기가 존재할 때
        setData(targetBlog);
      }
      else { // 일기가 없을 때 홈으로 이동
        alert("없는 일기 입니다.");
        navigate('/', {replace:true});
      }
    }
  },[id, blogList, navigate]);

  // 데이터가 없으면
  if(!data) {
    return <div className="BlogPage">로딩중입니다...</div>;
  }
  // 데이터가 존재하면
  else {
    // 오늘의 감정 불러오기

    return (
      <div className="BlogPage">
       <Header/>
        <div>{getStringDate(new Date(data.date))}</div>
            <div className="ContentWrapper">
            <p>{data.title}</p>
              <p>{data.content}</p>
            </div>
            <hr style={{height:"2px", background:"gray", width:"100%"}}/>
        <h3>댓글창</h3>
        {/* <div className="cmtView">
        <input
              className="inputDate2"
              style={{width:"10%", height:"30px", marginTop:"10px" ,display:"block" }}
              type="date"
              value={date2}
              onChange={(e)=>setDate2(e.target.value)} />

           <input 
           style={{width:"70%", height:"30px", marginTop:"10px",marginBottom:"10px" }}
            type = 'text'
            name = 'title2'
            required=""
            autoFocus
            placeholder = '작성자'
            value = {title2}
            ref={title2Ref}
            onChange={(e)=>setTitle2(e.target.value)}
            /><br/>
             
            <textarea
            style={{width:"70%", height:"300px"}}
            type = 'text'
            name = 'content2'
            required=""
            placeholder = '내용'
            value = {content2}
            ref={content2Ref} //ref가 뭐하는지 아직 모름
            onChange={(e)=>setContent2(e.target.value)}
            />
            <button  type="submit"
        style={{width:"90px",height:"25px",borderRadius:"6px", float:"right" ,marginTop:"10px", marginBottom:"10px" ,marginRight:"50px",marginLeft:"20px", cursor:"pointer" }}
          onClick={handleSubmit2}         >
          작성완료
        </button>
        </div> */}
       







        <Footer/>
      </div>
    );
  }
}

export default Blog;