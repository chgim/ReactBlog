import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogItem from "./BlogItem";


const sortOptionList=[
  {value:"latest", name:"최신순"},
  {value:"oldest", name:"오래된 순"},
];



const ControlMenu=({value, onChange, optionList})=>{
  return (
  <select
  style={{width:"90px",height:"25px",borderRadius:"6px",cursor:"pointer"}}
  className="ControlMenu"
  value={value} onChange={(e)=>onChange(e.target.value)}>
    {optionList.map((it, idx)=>(
      <option key={idx} value={it.value}>
        {it.name}
        </option>
        ))}
  </select>
  );
};


const BlogList=({blogList})=>{
  const navigate=useNavigate();
  const[sortType, setSortType]=useState("latest");
  

  const getProcessedBlogList=()=>{
    

   

    const compare=(a,b)=>{
    if(sortType==='latest'){
        return parseInt(b.date)-parseInt(a.date);
      }else{
        return parseInt(a.date)-parseInt(b.date);
      }
    };
    const copyList=JSON.parse(JSON.stringify(blogList));

    const filteredList=copyList;

    const sortedList=filteredList.sort(compare);
    return sortedList;
  };
  return( 
  <div className="BlogList">
    <div className="menu_wrapper" style={{display:"block"}}>
      <div className="left_col" style={{  marginTop:"10px",marginLeft: "50px",display:"inline-block",cursor:"pointer" }}>
      <ControlMenu value={sortType} 
      onChange={setSortType} optionList={sortOptionList}/>
      </div>
      <button
        style={{width:"90px",height:"25px",borderRadius:"6px", float:"right" ,marginTop:" 10px",marginRight: "50px",cursor:"pointer" }}
          onClick={() => {
            navigate('/write');
          }}
        >
          글쓰기
        </button>
    </div>
    <hr style={{height:"2px", background:"gray", width:"100%"}}/>
   <div className="dta" style={{}}>
       {getProcessedBlogList().map((it)=>(
      // <div key={it.id}>{it.content} {it.emotion}</div>
      <BlogItem  key={it.id} {...it}/>
    ))}
    </div>
 
  </div>
  
  );
};
BlogList.defaultProps={
  blogList:[],
};

export default BlogList;