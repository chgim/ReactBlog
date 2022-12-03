
import { useNavigate } from "react-router-dom";
const BlogItem=({id, title, content, date, })=>{
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
    <div className="BlogItem">
    <div onClick={goDetail} className="info_wrapper" style={{borderStyle:"solid"}}>
        {/* <div className="blog_img">{img}</div> */}
        <div className="blog_date">{strDate}</div>
        <div className="blog_title">{title}</div>
        <div className="blog_content_preview">{content.slice(0,25)}</div>
    </div>
    <div className="btn_wrapper"></div>
        <button onClick={goEdit} style={{width:"90px",height:"25px",borderRadius:"6px",cursor:"pointer"   }}>수정하기</button>
    </div>
    );
};
export default BlogItem;