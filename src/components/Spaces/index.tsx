import { Space } from "@tribeplatform/gql-client/types";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useSpaceContext } from "../spaceContext";

const Spaces: FC = () => {
  const { GetSpaces } = useSpaceContext();

  return (
    <div className="lg:w-3/4 m-auto flex ">
      {GetSpaces()?.nodes?.map((space: Space, i: number) => (
        <div
          className="flex-1 gap-2 bg-white transition-all hover:drop-shadow-xl drop-shadow-md p-2 m-2 rounded"
          key={space?.id}
        >
          <Link to={`/posts/${space.id}`}>
            {/* <div className="flex flex-col justify-center">{i + 1}.</div> */}
            <div className="flex flex-col flex-grow p-5">
              <div className="flex-1 flex justify-center">
                <img
                  className="w-12"
                  src="/images/community.png"
                  alt="space-icon"
                />
              </div>
              <div className="py-2 font-medium">{space.name}</div>
              {/* <div className="flex gap-2 text-xs text-gray-500">
              <div>By {post.createdBy?.member?.name}</div>|
              <div>{post.reactionsCount} upvotes</div>|
              <div>{post.repliesCount} comments</div>
            </div> */}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Spaces;
