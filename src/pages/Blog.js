import { useParams } from "react-router-dom";

const Blog=()=>{

    const {id}=useParams();
    console.log(id);
    return( 
    <div>
       <h1>Blog</h1>
    <p>이곳은 블로그 상세 페이지 입니다.</p>
    </div>
    );
};
export default Blog;