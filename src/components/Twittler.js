import React from 'react';
import SingleTweet from './SingleTweet';






class Twittler extends React.Component{
     constructor(props){
         super(props);
        this.state={
            tweets: [

                {
                uuid: 1,
                date: "2022-12-02",
                title:"홍길동",
                content: "좋은 정보 감사합니다."
                },
                {
                uuid: 2,
                date: "2022-12-03",
                title:"고길동",
                content: "재밌게 잘 봤습니다."
                }
            ]
        }
this.addTweet =this.addTweet.bind(this);
}
addTweet(){
let value = document.querySelector('#new-tweet-content').value;
let value2 = document.querySelector('#title').value; //새로 추가

this.setState({tweets: [...this.state.tweets, {
uuid: this.state.tweets.length + 1,
title:value2,
date: new Date().toISOString().slice(0, 10),
 content: value
}]})

}


render() {
return (

<div id="root">

<div id="tweets">{
this.state.tweets.map(tweet=>{
    return <SingleTweet key={tweet.uuid} tweet={tweet}/>
})
}</div>
<hr style={{height:"2px", background:"gray", width:"100%"}}/>

<input type = 'text' id = "title" placeholder = '작성자'></input><br/>       
<textarea id="new-tweet-content"></textarea><br/>
<button id="submit-new-tweet" onClick={this.addTweet}>새 글 쓰기</button>

</div>
)
}
}
export default Twittler;
