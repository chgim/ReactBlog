// import CommentItem from "./CommentItem";





// const CommentList=({commentList})=>{
  
//   const getProcessedCommentList=()=>{
    
//     const copyList2=JSON.parse(JSON.stringify(commentList));

//     const filteredList2=copyList2;

    
//     return filteredList2;
//   };

//   return( 
//   <div className="BlogList">
//     <hr style={{height:"2px", background:"gray", width:"100%"}}/>
//    <div className="dta" style={{}}>
//        {getProcessedCommentList().map((it)=>(
//       // <div key={it.id}>{it.content} {it.emotion}</div>
//       <CommentItem  key={it.id} {...it}/>
//     ))}
//     </div>
 
//   </div>
  
//   );
// };
// CommentList.defaultProps={
//   commentList:[],
// };

// export default CommentList;