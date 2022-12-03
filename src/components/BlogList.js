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
  style={{width:"90px",height:"25px",borderRadius:"6px",cursor:"pointer",}}
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
  const [form, setForm] = useState({search:""});

  // //search
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setForm({
        search:""
      });
   alert("검색완료");
    };
  };
  

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
      <div className="left_col" style={{  marginTop:"10px",marginLeft: "50px",float:"left", cursor:"pointer",  }}>
      <ControlMenu value={sortType} style={{display:"inlineBlock"}}
      onChange={setSortType} optionList={sortOptionList}/>
      
      {/*search*/}
      <form style={{display:"inline", marginLeft:"15px"}}>
      <input type="text" 
      style={{width:"160px",height:"19px",borderRadius:"6px",cursor:"pointer" }} 
      value={form.search} name="search"  
      onChange={(e) => {
        setForm({ search: e.target.value });
      }}
      onKeyPress={onKeyPress}  placeholder="Search..." />
      </form>
      {/*search*/}
      
      </div>
      <button
        style={{width:"90px",height:"25px",borderRadius:"6px", float:"right" ,marginTop:" 10px",marginRight: "50px",cursor:"pointer", marginBottom:"10px" }}
          onClick={() => {
            navigate('/write');
          }}
        >
          글쓰기
        </button>
    </div>
    <hr style={{height:"1.2px", background:"#5e4a48", width:"100%"}}/>
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