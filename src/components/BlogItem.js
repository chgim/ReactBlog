

import { useNavigate } from "react-router-dom";
const BlogItem=({id, title, content, date})=>{
    const navigate=useNavigate();
    

    const env=process.env;
    env.PUBLIC_URL=env.PUBLIC_URL || "";
    
    const goDetail=()=>{
        navigate(`/blog/${id}`);
    }

    const goEdit=()=>{
        navigate(`/edit/${id}`);
    }


    const strDate=new Date(parseInt(date)).toLocaleDateString();
    return(
<div className="BlogItem" style={{}}>

<div className="list" style={{width:"60%",marginLeft:"20%", paddingBottom:"-10px",marginTop:"70px", height:"210px" ,cursor:"pointer"}}>
<div onClick={goDetail} className="info_wrapper">
{/* <img className="imgy" src={imgArray[2].src} alt="fail" style={{width:"250px", height:"200px", opacity:"0.9",float:"right", marginTop:"-10px", borderRadius:"5px" }}/> */}
{/*이미지 업로드 기능이 없어 기본 데이터 이후로는 a10까지 지정 이미지 업로드*/}
<img className="imgy" src={process.env.PUBLIC_URL+`images/a${id}.jpg`} alt="fail" style={{width:"250px", height:"200px", opacity:"0.9",float:"right", marginTop:"-10px", borderRadius:"5px" }}/>
{/*이미지 업로드 기능이 없어 기본 데이터 이후로는 a10까지 지정 이미지 업로드*/}
<div className="blog_title" style={{fontSize:"27px",  fontWeight:"bold", marginTop:"20px",}}>{title}</div>   
<div className="blog_date" style={{marginLeft:"2px", marginTop:"5px",fontWeight:"bold", color:"#404040"  }}>{strDate}</div>
<div className="blog_content_preview" style={{ marginTop:"20px", width:"63%", fontSize:"15px", fontWeight:"bold", color:"#404040" }}>{content.slice(0,100)+"..."}</div>
</div>
<div style={{marginLeft:"-61px",}}><button onClick={goEdit} style={{width:"90px",height:"25px",borderRadius:"3px",cursor:"pointer",display:"block", marginTop:"18px", marginLeft:"63px"  }}>수정하기</button></div>
</div>

    <hr style={{border:" 0.5px solid ",backgroundColor:"gray", width:"60%", marginLeft:"20%" ,opacity:"0.3"}}/>
</div>

    );
};
export default BlogItem;