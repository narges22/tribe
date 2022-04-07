import { Space } from "@tribeplatform/gql-client/types";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useSpaceContext } from "../spaceContext";

const Spaces: FC = () => {
  const { GetSpaces } = useSpaceContext();

  return (
    <div className="lg:w-3/4 m-auto flex flex-col">
      {GetSpaces()?.nodes?.map((space: Space, i: number) => (
        <div className="flex gap-2 bg-hacker-body p-2" key={space?.id}>
          <div className="flex flex-col justify-center">{i + 1}.</div>
          <div className="flex flex-col flex-grow">
            <Link to={`/posts/${space.id}`}>
              <div>{space.name}</div>
            </Link>
            {/* <div className="flex gap-2 text-xs text-gray-500">
              <div>By {post.createdBy?.member?.name}</div>|
              <div>{post.reactionsCount} upvotes</div>|
              <div>{post.repliesCount} comments</div>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Spaces;
