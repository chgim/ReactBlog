// import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext, useEffect, useState } from 'react';
import { BlogStateContext } from '../App';
import BlogList from "../components/BlogList";
// import Login from "./Login";
// import { useNavigate  } from "react-router-dom";
const Main=()=>{
    
    const blogList=useContext(BlogStateContext);
  
  const[data, setData]=useState([]);

    useEffect(()=>{
        setData(blogList)
    },[blogList]);

    useEffect(()=>{
        console.log(data);
      },[data]);

    // const navigate=useNavigate();
    return(
        <div>
             <Header />
            {/* <button
        style={{width:"90px",height:"25px",borderRadius:"6px", float:"right" ,margin:" 10px 50px" }}
          onClick={() => {
            navigate('/write');
          }}
        >
          글쓰기
        </button> */}
        <BlogList blogList={data}/>
             <Footer/>
        </div>
   
    );   
    
};
export default Main;