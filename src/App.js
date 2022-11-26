/* eslint-disable */

import "./App.css";
import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import BoardList from "./pages/BoardList";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              
      </Routes>
    </BrowserRouter>
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
