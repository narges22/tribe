import { FC } from "react";
import Posts from "../../components/posts";

const PostList: FC = () => {
  return (
    <div className="lg:w-3/4 m-auto p-5">
      <div className="text-center text-cyan-900 font-bold text-xl">Posts</div>
      <Posts />
    </div>
  );
};

export default PostList;
