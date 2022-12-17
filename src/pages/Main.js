import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { BlogStateContext } from "../App";
import BlogList from "../components/BlogList";

const Main = () => {
  const blogList = useContext(BlogStateContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(blogList);
  }, [blogList]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Header />
      <BlogList blogList={data} />
      <Footer />
    </div>
  );
};
export default Main;
