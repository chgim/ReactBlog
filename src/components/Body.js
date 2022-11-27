import { useNavigate  } from "react-router-dom";


const Body=()=>{
    const navigate=useNavigate();
    return(
        <div>
            <button
        style={{width:"90px",height:"25px",borderRadius:"6px", float:"right" ,margin:" 10px 50px" }}
          onClick={() => {
            navigate('/write');
          }}
        >
          글쓰기
        </button>
        </div>
    );
};
export default Body;