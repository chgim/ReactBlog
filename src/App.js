/* eslint-disable */
import React, { useReducer, useRef , useEffect,} from "react";
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
  localStorage.setItem("blog", JSON.stringify(newState));
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
  const [data, dispatch] = useReducer(reducer, dummyData);
  

  
  const dataId = useRef(6); //dummyData id가 5까지 있음.
  
  useEffect(()=>{
    const localData = localStorage.getItem("blog");
    if(localData) {
      const blogList = JSON.parse(localData).sort(
        (a,b) => parseInt(b.id) - parseInt(a.id)
      );
      dataId.current = parseInt(blogList[0].id) + 1
     
	 // 초기값을 설정해주는 액션
      dispatch({type:"INIT", data:blogList});
    }
  }, []);

console.log(new Date().getTime());








/////

/////



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
};

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
      <BlogDispatchContext.Provider value={{onCreate, onEdit, onRemove }}>
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/write" element={<Write />} />
              <Route path="/edit/:id" element={<Edit />}/>
              <Route path="/blog/:id" element={<Blog />}/>
              
      </Routes>
    </BrowserRouter>
    </BlogDispatchContext.Provider>
     </BlogStateContext.Provider>
  );
}


export default App;


