

import { useNavigate } from "react-router-dom";
const BlogItem=({id, title, content, date,})=>{
    const navigate=useNavigate();
   

    const env=process.env;
    env.PUBLIC_URL=env.PUBLIC_URL || "";
    
    const goDetail=()=>{
        navigate(`/blog/${id}`);
    }

    const goEdit=()=>{
        navigate(`/edit/${id}`);
    }

    
    
    const imgArray=[
        {
            id:1,         
            src:"images/a1.jpg"
        },
        {
            id:2,          
            src:"images/a2.webp"
        },
        {
            id:3,           
            src:"images/a3.jpg"
        },
        {
            id:4,         
            src:"images/a4.jpg"
        },
        {
            id:5,   
            src:"images/a5.jpg"
        },
    ];
   


    const strDate=new Date(parseInt(date)).toLocaleDateString();
    return(

//     <div className="BlogItem" style={{}}>

//     <div className="list" style={{width:"40%",marginLeft:"30%", paddingBottom:"10px",borderRadius:"0px 0px 10px 10px", border:"3px solid", borderColor:"#313031",marginTop:"70px", }}>
//     <div onClick={goDetail} className="info_wrapper">
//     <img src={imgArray[2].src} alt="fail" style={{width:"99.9%", height:"300px", opacity:"0.9", marginLeft:"0.05%" }}/>
//     <div className="blog_title" style={{width:"100%", fontSize:"25px", marginLeft:"20px", fontWeight:"bold", marginTop:"2px"}}>{title}</div>   
//     <div className="blog_date" style={{width:"100%",marginLeft:"20px", marginTop:"2px",  }}>{strDate}</div>
//     </div>
//     {/* <div className="blog_content_preview" style={{width:"40%", marginLeft:"30%"}}>{content.slice(0,25)}</div> */}
//     <div style={{marginLeft:"-40px",}}><button onClick={goEdit} style={{width:"90px",height:"25px",borderRadius:"3px",cursor:"pointer",display:"block", marginTop:"7px", marginLeft:"60px"  }}>수정하기</button></div>
// </div>
   
//         <hr style={{marginTop:"50px" ,border:" 0.3px solid ",backgroundColor:"gray", width:"48%", marginLeft:"26%" ,opacity:"0.2"}}/>
//     </div>


//New Style//
<div className="BlogItem" style={{}}>

<div className="list" style={{width:"60%",marginLeft:"20%", paddingBottom:"-10px",marginTop:"100px", height:"210px" }}>
<div onClick={goDetail} className="info_wrapper">
<img src={imgArray[2].src} alt="fail" style={{width:"250px", height:"200px", opacity:"0.9",float:"right", marginTop:"-10px", borderRadius:"5px" }}/>
<div className="blog_title" style={{fontSize:"27px",  fontWeight:"bold", marginTop:"20px",}}>{title}</div>   
<div className="blog_date" style={{marginLeft:"2px", marginTop:"5px",fontWeight:"bold", color:"#404040"  }}>{strDate}</div>
<div className="blog_content_preview" style={{ marginTop:"20px", width:"63%", fontSize:"15px", fontWeight:"bold", color:"#404040" }}>{content.slice(0,100)+"..."}</div>
</div>
<div style={{marginLeft:"-61px",}}><button onClick={goEdit} style={{width:"90px",height:"25px",borderRadius:"3px",cursor:"pointer",display:"block", marginTop:"18px", marginLeft:"63px"  }}>수정하기</button></div>
</div>

    <hr style={{border:" 0.5px solid ",backgroundColor:"gray", width:"60%", marginLeft:"20%" ,opacity:"0.3"}}/>
</div>
//New Style//
    );
};
export default BlogItem;