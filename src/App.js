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
export const reducer = (state, action) => {
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
  { id:1,title:"부산 1박2일 여행 후기",
   content:"부산여행 당일치기로 다녀오기 아쉽다면 1박2일 여행은 어떨까요. 1박2일동안 부산의 주요관광지는 모두 둘러볼 수 있습니다. 더불어 부산여행은 늦은 밤까지 알차게 즐길 수 있는 해운대가 있어 더욱 좋은 곳이죠. 젋은이 살아있는 부산여행 1박2일을 준비하고 계신다면 일차, 코스별로 정리해둔 아래 1박2일 부산여행 코스를 참고해보시기 바랍니다.", date:1669551560812, },
  { id:2,title:"후쿠오카 온천여행",
  content:"강릉은 바다향, 솔향, 커피 향이 있는 도시예요. 아름다운 동해와 울창한 소나무 숲은 강릉만이 가진 천혜의 관광 자원이에요. 다양한 문화유산이 있고, 최근에는 커피의 도시로 자리매김하면서 사계절 여행 마니아들의 사랑을 받는 곳이 되었어요. 또한 싱싱한 해산물과 다양한 향토 음식이 여행객을 입을 즐겁게 해주는 도시이죠. 강릉으로 떠난다면 둘러볼 만한 곳을 소개할게요.", date:1669551560813, },
  { id:3,title:"강릉 가볼만한 곳 베스트 9",
  content:"강릉은 바다향, 솔향, 커피 향이 있는 도시예요. 아름다운 동해와 울창한 소나무 숲은 강릉만이 가진 천혜의 관광 자원이에요. 다양한 문화유산이 있고, 최근에는 커피의 도시로 자리매김하면서 사계절 여행 마니아들의 사랑을 받는 곳이 되었어요. 또한 싱싱한 해산물과 다양한 향토 음식이 여행객을 입을 즐겁게 해주는 도시이죠. 강릉으로 떠난다면 둘러볼 만한 곳을 소개할게요.", date:1669551560814, },
  { id:4,title:"서울광광 테마여행 코스 추천",
   content:"롯데월드타워 몰에는 상점, 카페, 레스토랑, 갤러리, 콘서트 홀이 있습니다. 이 타워는 세계에서 5번째로 제일 높으며 전망대, 스카이워크, 럭셔리한 호텔이 있습니다.", date:1669551560815, },
  { id:5,title:"왕초보를 위한 서울 3박4일 코스",
  content:"스타필드 코엑스몰은 아시아 최대의 지하 쇼핑몰입니다. 국내 및 해외 브랜드를 취급하며 아쿠아리움, 영화관, 김치 박물관 등의 관광명소를 제공합니다.", date:1669551560816, },
]



function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
 

  
  const dataId = useRef(6); //dummyData id가 5까지 있음.
 
  // useEffect(()=>{
  //   const localData = localStorage.getItem("blog");
  //   if(localData) {
  //     const blogList = JSON.parse(localData).sort(
  //       (a,b) => parseInt(b.id) - parseInt(a.id)
  //     );
  //     dataId.current = parseInt(blogList[0].id) + 1
     
	//  // 초기값을 설정해주는 액션
  //     dispatch({type:"INIT", data:blogList});
  //   }
  // }, []);
  useEffect(() => {
    const localData = localStorage.getItem("blog");
    if (localData) {
      const blogList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );
      dataId.current = parseInt(blogList[0].id) + 1;

      // 초기값을 설정해주는 액션
      dispatch({ type: "INIT", data: blogList });
    } else {
      localStorage.setItem("blog", JSON.stringify(dummyData));
      dispatch({ type: "INIT", data: dummyData });
    }
  }, []);

// console.log(new Date().getTime());


// CREATE
const onCreate = (date, title, content,) => {
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
      <BlogDispatchContext.Provider value={{onCreate, onEdit, onRemove}}>
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


