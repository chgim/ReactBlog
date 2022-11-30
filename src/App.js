/* eslint-disable */
import React, { useReducer, useRef } from "react";
import "./App.css";
// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import BoardList from "./pages/BoardList";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Edit from "./pages/Edit";
import Blog from "./pages/Blog";


// 2개의 파라미터 (state, action)
const reducer = (state, action) => {
  let newState = [];
  switch(action.type){
    case "INIT" : {
      return action.data;
    }
    case "CREATE" : {
      // const newItem = { ...action.data };
      newState = [action.data, ...state]; // 변경될 값
      break;
    }
    case "REMOVE" : {
      newState = state.filter((it)=>it.id !== action.targetId); //id가 매치하지 않는 값만 보여줌
      break;
    }
    case "EDIT" : {
      newState = state.map((it)=>it.id === action.data.id ? {...action.data} : it);
      break;
    }
    default:
      return state;
  }
  return newState;
};


// Context API
export const BlogStateContext = React.createContext();
export const BlogDispatchContext = React.createContext();

// 일기 더미데이터 (시간순)
const dummyData = [
  { id:1,title:"하이", content:"독립 이래 최악의 외환위기를 겪어온 스리랑카가 결국 공식적인 디폴트(채무불이행) 상태라고 19일 로이터 통신이 보도했다.", date:1669551560812, },
  { id:2,title:"하이",content:"핀란드와 스웨덴이 북대서양조약기구 나토 가입을 위한 신청서를 제출했지만, 양국의 나토 가입을 반대해 온 터키의 입장은 여전히 강경합니다.", date:1669551560813, },
  { id:3,title:"하이",content:"전 세계 인구 절반 이상이 심장질환 발병 주요 위험요인 중 하나인 고혈압을 가지고 있다. 혈압 조절은 유전적 요인, 생활습관 요인, 체내 미생물군이 어떤 형태로 조화를 이뤄 기인하는 것으로 밝혀져 있다.", date:1669551560814, },
  { id:4,title:"하이", content:"로봇 산업은 공장과 같은 생산 현장에서 위험 작업을 대체하는 산업용과 의료·외식·숙박 등 부문에서 활용되는 서비스용으로 구분된다.", date:1669551560815, },
  { id:5,title:"하이",content:"칸 영화제에서 첫 선을 보인 배우 이정재의 감독 데뷔작 '헌트'가 상영 전회차 매진을 기록했다.", date:1669551560816, },
]



function App() {

 // data의 기본 state는 []에서 dummyData 받기
  
  
 const [data, dispatch] = useReducer(reducer, dummyData);
   
 //console.log(new Date().getTime(dummyData)); // 현재시간

// data의 기본 state는 []
// const [data, dispatch] = useReducer(reducer, []);
console.log(new Date().getTime());
// 일기 id로 사용
const dataId = useRef(0);

// CREATE
const onCreate = (date, title, content) => {
  dispatch({
    type : "CREATE",
    data : {
      id: dataId.current,
      date : new Date(date).getTime(),
      title,
      content,
      
    }
  });
  dataId.current += 1;
}

// REMOVE
const onRemove = (targetId) => {
  dispatch({type: "REMOVE", targetId});
};

// EDIT
const onEdit = (targetId, date,title, content) => {
  dispatch({
    type : "EDIT",
    data : {
      id : targetId,
      date : new Date(date).getTime(),
      title,
      content,
      
    }
  });
};



  return (
    <BlogStateContext.Provider value={data}>
      <BlogDispatchContext.Provider value={{onCreate, onEdit, onRemove}}>
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/write" element={<Write />} />
              <Route path="/edit" element={<Edit />}/>
              <Route path="/blog/:id" element={<Blog />}/>
              
      </Routes>
    </BrowserRouter>
    </BlogDispatchContext.Provider>
     </BlogStateContext.Provider>
  );
}


export default App;





// import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import "./App.css";
// import Login from "./components/Login";
// import Login from "./components/Login";
// import DiaryEditor from "./DiaryEditor";
// import DiaryList from "./DiaryList";

// const App = () => {
  // const [data, setData] = useState([]);

  // const dataId = useRef(0);

  // const getData = async () => {
  //   const res = await fetch(
  //     "https://jsonplaceholder.typicode.com/comments"
  //   ).then((res) => res.json());

  //   const initData = res.slice(0, 20).map((it) => {
  //     return {
  //       author: it.email,
  //       content: it.body,
  //       emotion: Math.floor(Math.random() * 5) + 1,
  //       created_date: new Date().getTime(),
  //       id: dataId.current++
  //     };
  //   });

  //   setData(initData);
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getData();
  //   }, 1500);
  // }, []);

  // const onCreate = useCallback((author, content, emotion) => {
  //   const created_date = new Date().getTime();
  //   const newItem = {
  //     author,
  //     content,
  //     emotion,
  //     created_date,
  //     id: dataId.current
  //   };

  //   dataId.current += 1;
  //   setData((data) => [newItem, ...data]);
  // }, []);

  // const onRemove = useCallback((targetId) => {
  //   setData((data) => data.filter((it) => it.id !== targetId));
  // }, []);

  // const onEdit = useCallback((targetId, newContent) => {
  //   setData((data) =>
  //     data.map((it) =>
  //       it.id === targetId ? { ...it, content: newContent } : it
  //     )
  //   );
  // }, []);

  // const getDiaryAnalysis = useMemo(() => {
  //   if (data.length === 0) {
  //     return { goodcount: 0, badCount: 0, goodRatio: 0 };
  //   }

  //   const goodCount = data.filter((it) => it.emotion >= 3).length;
  //   const badCount = data.length - goodCount;
  //   const goodRatio = (goodCount / data.length) * 100.0;
  //   return { goodCount, badCount, goodRatio };
  // }, [data.length]);

  // const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  // return (
    // <div className="App">
    //   <DiaryEditor onCreate={onCreate} />
    //   <div>전체 일기 : {data.length}</div>
    //   <div>기분 좋은 일기 개수 : {goodCount}</div>
    //   <div>기분 나쁜 일기 개수 : {badCount}</div>
    //   <div>기분 좋은 일기 비율 : {goodRatio}</div>
    //   <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    // </div>
    // <Login />
  // );
// };
// export default App;



// // import logo from './logo.svg';
// import './App.css';
// import DiaryEditor from './DiaryEditor';
// import DiaryList from './DiaryList';


// const dummyList=[
//   {
//     id:1,
//     author:"김찬호",
//     content:"하이1",
//     emotion:5,
//     created_date:new Date().getTime(),
//   },
//   {
//     id:2,
//     author:"김찬호2",
//     content:"하이2",
//     emotion:3,
//     created_date:new Date().getTime(),
//   },
//   {
//     id:3,
//     author:"김찬호3",
//     content:"하이3",
//     emotion:5,
//     created_date:new Date().getTime(),
//   },
// ]
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <DiaryEditor/>
//       <DiaryList diaryList={dummyList}/>
//       </header>
//     </div>
//   );
// }

// export default App;
