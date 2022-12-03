import React from "react";

export default function SingleTweet({tweet}){
    return(
        <div className='tweet'>
             
             <div className="title"  style={{marginLeft:"50px"}}>{tweet.title}</div>
            <div className="date"  style={{marginLeft:"50px"}}>{tweet.date}</div>
            <div className="content"  style={{marginLeft:"50px"}}>{tweet.content}</div>
            <hr/>
        </div>
    );
}