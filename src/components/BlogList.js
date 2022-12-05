import { useEffect,  useState } from "react";
import { useNavigate } from "react-router-dom";
// import { reducer } from "../App";
import BlogItem from "./BlogItem";

const sortOptionList = [
  { value: "NEW", name: "최신순" },
  { value: "OLD", name: "오래된 순" },
];

const BlogList = ({ blogList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("NEW");
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  // //search
  const onKeyPress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      searchItem(e);
    }
  };

  useEffect(() => {
    if (sortType === "OLD") {
      setData(data.sort((a, b) => b.date - a.date));
    } else {
      setData(data.sort((a, b) => a.date - b.date));
    }
  }, [sortType]);


  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("blog")));
  }, []);

  const onClickReset = () => {
    setSearchValue("");
    setData(JSON.parse(localStorage.getItem("blog")));
  };

  const searchItem = (e) => {
    e.preventDefault();
    const getAll = localStorage.getItem("blog")
      ? JSON.parse(localStorage.getItem("blog"))
      : [];
    setData(getAll.filter((e) => e.title.includes(searchValue)));
  };
  return (
    <div className="BlogList" >
      <div className="menu_wrapper" style={{ display: "block" }}>
        <div
          className="left_col"
          style={{
            marginTop: "10px",
            marginLeft: "50px",
            float: "left",
            cursor: "pointer",
          }}
        >
          <select
            style={{
              width: "90px",
              height: "25px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
            className="ControlMenu"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>

          {/*search*/}
          <form style={{ display: "inline", marginLeft: "15px" }}>
            <input
              type="text"
              style={{
                width: "160px",
                height: "19px",
                borderRadius: "3px",
                cursor: "pointer",
              }}
              value={searchValue}
              name="search"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onKeyPress={onKeyPress}
              placeholder="Search..."
            />
            <button style={{width: "50px", height: "25px", borderRadius: "3px", marginBottom:"10px",cursor: "pointer",marginLeft:"5px", marginRight:"5px" }}
             onClick={searchItem}>검색</button>
            <button style={{width: "50px", height: "25px", borderRadius: "3px", marginBottom:"10px",cursor: "pointer",}} 
            onClick={onClickReset}>리셋</button>
          </form>
          {/*search*/}
        </div>
        <button
          style={{
            width: "90px",
            height: "25px",
            borderRadius: "3px",
            float: "right",
            marginTop: " 10px",
            marginRight: "50px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
          onClick={() => {
            navigate("/write");
          }}
        >
          글쓰기
        </button>
      </div>
      <hr style={{ height: "1.2px", background: "#313031", width: "100%" }} />
      <div className="dta" style={{}}>
        {data &&
          data.map((it) => (
            // <div key={it.id}>{it.content} {it.emotion}</div>
            <BlogItem key={it.id} {...it} />
          ))}
      </div>
    </div>
  );
};
BlogList.defaultProps = {
  blogList: [],
};

export default BlogList;

// const BlogList=({blogList})=>{
//   const navigate=useNavigate();
//   const[sortType, setSortType]=useState("latest");
//   const [form, setForm] = useState({search:""});

//   // //search
//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       setForm({
//         search:""
//       });
//    alert("검색완료");
//     };
//   };
  

//   const getProcessedBlogList=()=>{
//     const compare=(a,b)=>{
//     if(sortType==='latest'){
//         return parseInt(b.date)-parseInt(a.date);
//       }else{
//         return parseInt(a.date)-parseInt(b.date);
//       }
//     };
//     const copyList=JSON.parse(JSON.stringify(blogList));

//     const filteredList=copyList;

//     const sortedList=filteredList.sort(compare);
//     return sortedList;
//   };
//   return( 
//   <div className="BlogList">
//     <div className="menu_wrapper" style={{display:"block"}}>
//       <div className="left_col" style={{  marginTop:"10px",marginLeft: "50px",float:"left", cursor:"pointer",  }}>
//       <ControlMenu value={sortType} style={{display:"inlineBlock"}}
//       onChange={setSortType} optionList={sortOptionList}/>
      
//       {/*search*/}
//       <form style={{display:"inline", marginLeft:"15px"}}>
//       <input type="text" 
//       style={{width:"160px",height:"19px",borderRadius:"6px",cursor:"pointer" }} 
//       value={form.search} name="search"  
//       onChange={(e) => {
//         setForm({ search: e.target.value });
//       }}
//       onKeyPress={onKeyPress}  placeholder="Search..." />
//       </form>
//       {/*search*/}
      
//       </div>
//       <button
//         style={{width:"90px",height:"25px",borderRadius:"6px", float:"right" ,marginTop:" 10px",marginRight: "50px",cursor:"pointer", marginBottom:"10px" }}
//           onClick={() => {
//             navigate('/write');
//           }}
//         >
//           글쓰기
//         </button>
//     </div>
//     <hr style={{height:"1.2px", background:"#5e4a48", width:"100%"}}/>
//    <div className="dta" style={{}}>
//        {getProcessedBlogList().map((it)=>(
//       // <div key={it.id}>{it.content} {it.emotion}</div>
//       <BlogItem  key={it.id} {...it}/>
//     ))}
//     </div>
 
//   </div>
  
//   );
// };
// BlogList.defaultProps={
//   blogList:[],
// };

// export default BlogList;