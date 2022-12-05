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
   content:"“부산여행” 이라고 하면 대부분 해운대를 가장 먼저 떠올린다. 부산은 바다부터 도심까지 다양한 여행이 가능하기에 사랑받는 여행지로 해운대 이외에도 가볼한만한 곳이 매우 많다. 남들과 똑같은 부산여행이 지겨운 분들을 위해 부산에 가까이 살면서 부산의 다양함을 경험한 여행 전문 블로거 재빈짱이 “부산 1박2일 여행코스”를 추천한다.송도해수욕장은 우리나라에서 제일 처음 생긴 해수욕장이다. 그동안 해운대, 광안리 해수욕장의 인기로 현지인에게만 사랑받으며명성을 잃어가다가 몇년전부터 다시 주목 받고 있다. 그 이유는 바로 스카이워크 때문이다. 바다 위를 걷는 기분이 어떤 기분인지, 주변의 풍광과 함께 걸으면 새로운 세상에 온 듯한 기분이 든다. 추운 겨울에도 연인과 함께 이 바다 위를 걷는 다면 추위도 달아날 낭만적인 여행이 되지 않을까?송도해수욕장에선 스카이워크로 여행일정이 끝난 것은 아니다. 바로 옆에 바다위를 달리는 케이블카를 꼭 타보자. 케이블카를 타고 올라 가게 되면 공룡어드벤처라는 공룡을 볼 수 있는 작은 공원이 있다. 바다 위를 나르는 케이블카도 타고 공룡도 볼 수 있어 아이들과 함께라면 1석2조의 효과를 볼 수 있다. 국내에서 쉽게 경험 할 수 없는 것들이 가득한 송도해수욕장은 1박2일 부산여행코스에서 반드시 꼭 가봐야할 장소로 추천한다!" 
   ,date:1654551560813,},
  { id:2,title:"후쿠오카 온천여행",
  content:"후쿠오카 여행에서 절대 빼놓을 수 없는 여행지, 유후인과 벳푸! 특히나 두 곳 모두 온천 여행지로 유명해 남녀노소 모두에게 큰 인기를 끌고 있는 곳입니다. 이 매력적인 곳으로 여행할 계획이 있다면 프라이빗 차량으로 유후인 & 벳푸 일일 투어를 떠나보세요. 벳푸의 랜드마크 '지옥 온천'을 비롯하여 8개의 온천을 둘러보고, 유후인으로 넘어가 스파까지 즐길 수 있습니다. 그리고 빼어난 풍경으로 유명한 긴린코와 코코노에 유메 그랜드 서스펜션 브리지도 함께 돌아볼 수 있으니 충분히 즐거운 시간을 보내실 수 있습니다. 단 하루만이라도 편하게 이동하고, 쉴 수 있도록 후쿠오카 시내에 위치한 호텔 픽업, 드롭 서비스도 제공해드리니 절대 놓치지 마세요.[ 이 투어의 매력 포인트! ] - 규슈 지방의 대표 온천지역, 벳푸! 지옥 온천을 비롯한 8개의 온천을 돌아봅니다.- 후쿠오카 여행에서 절대 빼놓을 수 없는 유후인으로 떠나 스파를 즐겨보세요.- 긴린코를 산책하며 고즈넉한 풍경 속으로 빠져보세요.- 지상 777m의 높이를 자랑하는 고코노에 유메 서스펜션 브리지에서 그림 같은 풍경을 눈에 담아보세요."                                                                                                                                   
  , date:1659631560813, },
  { id:3,title:"강릉 가볼만한 곳 베스트 9",
  content:"강릉은 바다향, 솔향, 커피 향이 있는 도시예요. 아름다운 동해와 울창한 소나무 숲은 강릉만이 가진 천혜의 관광 자원이에요. 다양한 문화유산이 있고, 최근에는 커피의 도시로 자리매김하면서 사계절 여행 마니아들의 사랑을 받는 곳이 되었어요. 또한 싱싱한 해산물과 다양한 향토 음식이 여행객을 입을 즐겁게 해주는 도시이죠. 강릉으로 떠난다면 둘러볼 만한 곳을 소개할게요.오죽헌은 경포호 인근에 있는 관광 명소로 신사임당과 율곡 이이가 태어난 곳이에요. 뒤뜰에 검정 대나무가 자라고 있어 오죽헌이라는 이름이 붙여졌다 해요. 넓은 경내에는 신사임당이 이이를 출산한 몽룡실, 율곡의 영정을 모신 문성사, 자경문, 율곡기념관, 시립박물관 등이 있어요. 아이들과 함께 여유롭게 둘러보며 옛 역사를 돌아보기 좋은 곳이에요.오죽헌 인근에 있어 함께 둘러보기 좋은 선교장은 조선 시대 사대부가의 99칸 상류저택이에요. 옛날에 경포호를 가로질러 배로 다리를 만들어 건너다녔다 하여 선교장이라는 명칭이 생겼죠. 경내에는 활래정, 본채, 안채, 별당, 행랑채 등 99간 저택답게 많은 건물을 구경할 수 있어요. 조경이 깔끔하게 잘되어 있어 사진도 찍고 여유롭게 산책하며 즐기기에 좋은 곳이에요.",
   date:1665841560813, },
  { id:4,title:"서울관광 테마여행 코스 추천",
   content:"롯데월드타워 몰에는 상점, 카페, 레스토랑, 갤러리, 콘서트 홀이 있습니다. 이 타워는 세계에서 5번째로 제일 높으며 전망대, 스카이워크, 럭셔리한 호텔이 있습니다.롯데타워에는 전망대, 주거시설, 호텔 등이 있어요. 롯데타워는 전망대 말고는일반인이 갈 수 있는 곳이거의 없다고 보시면 돼요. 관람 포인트는 롯데몰이죠.롯데몰에는 에비뉴엘동, 쇼핑몰동, 시네마동이 있는데 쇼피몰동과 시네마동은 거의 하나의 건물처럼 연결되어 있어서 구분하기도 쉽지 않아요. 제 2롯데월드(롯데타워, 롯데몰)는 정부에서 서울 공항의 활주로 각도를 변경하는 조건으로 최종 허가를 내주어 지어졌다고 해요. 아마도 이 허가를 받으려고 롯데에서 무던히 애를 썼겠다는 생각이 퐉! 드네요. 어찌 됐든 제 2롯데월드(롯데타워, 롯데몰)는 2016년 12월 완공되었답니다.우리나라에서는 가장 높은 건물로 롯데타워의 높이는 555m(세계 5위)에요. 참고로 세계에서 가장 높은 빌딩(2019년 6월 기준)은 두바이의 부르즈 할리파로그 높이가 829m라고 해요.", 
   date:1667551560813, },
  { id:5,title:"왕초보를 위한 서울 3박4일 코스",
  content:"스타필드 코엑스몰은 아시아 최대의 지하 쇼핑몰입니다. 국내 및 해외 브랜드를 취급하며 아쿠아리움, 영화관, 김치 박물관 등의 관광명소를 제공합니다.트렌드와 문화의 흐름을 이끄는 도시의 매력, 스타필드 코엑스몰이 서울의 중심에서 새로운 삶을 이야기한다. 동시대 패션과 미식, 문화와 엔터테인먼트까지 도시의 감성이 깃든 다양한 선택지를 제공한다. 뷰티, 패션, 라이프스타일 등 320여개 매장을 둘러보는 것만으로도 트렌드를 읽을 수 있고, 100여 곳의 레스토랑과 카페에서 눈과 입이 동시에 즐거워지는 경험을 할 수 있다. 스타필드 코엑스몰 중심에 자리잡은 ''별마당 도서관''은 독서와 사색은 물론 문학과 예술 분야 명사와 소통하고 공감하는 문화공간이다.별마당도서관은 코엑스몰 센트럴플라자에 총면적 2,800m2, 2개 층으로 들어선 무료도서관이다. 인스타그램에는 별마당도서관을 주제로 한 콘텐츠가 하루 평균 300개 가까이 올라오고, 관련 콘텐츠 수가 7만5천건을 넘어섰다.휴식과 만남, 그리고 책을 주제로 소통하는 문화 감성 공간으로 누구나 무료로 이용할 수 있다. 말그대로 독서를 하거나, 누구를 기다리는 장소로 이용되고 있다.멈춤, 비움, 채움, 기쁨을 강조한 별마당 도서관은 약 850평의 복층 구조로 되어있다. ", 
  date:1669551560816, },
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
const onEdit = (targetId, date,title, content,) => {
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


