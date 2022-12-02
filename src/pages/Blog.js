import { useContext, useEffect, useState,   } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  BlogStateContext } from "../App";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Twittler from "../components/Twittler";



/*Comment 코드 */

/* */

const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
  };

const Blog = () => {

  const { id } = useParams(); // pathVariable = id
  const blogList = useContext(BlogStateContext); // diaryList 가져오기
  const navigate = useNavigate(); // 이동
  const [data, setData] = useState();

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
        
        
        <Twittler/>
        <Footer/>
      </div>
    );
  }
}

export default Blog;