import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogStateContext } from "../App";

import BlogEditor from "../components/BlogEditor";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams(); // 현재 전달받은 id
  const blogList = useContext(BlogStateContext);

  useEffect(() => {
    if (blogList.length >= 1) {
      const targetBlog = blogList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetBlog) {
        setOriginData(targetBlog);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, blogList, navigate]);

  return (
    <div>
      {originData && <BlogEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
