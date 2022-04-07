import { Space } from "@tribeplatform/gql-client/types";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useSpaceContext } from "../spaceContext";

const Spaces: FC = () => {
  const { GetSpaces } = useSpaceContext();

  return (
    <div className="lg:w-3/4 m-auto grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1">
      {GetSpaces()?.nodes?.map((space: Space, i: number) => (
        <div
          className=" gap-2 bg-white transition-all hover:drop-shadow-xl drop-shadow-md p-2 m-2 rounded"
          key={space?.id}
        >
          <Link to={`/posts/${space.id}`}>
            <div className="flex flex-col flex-grow p-5">
              <div className="flex-1 flex justify-center">
                <img
                  className="w-12"
                  src="/images/community.png"
                  alt="space-icon"
                />
              </div>
              <div className="py-2 font-medium">{space.name}</div>
              <div className="flex justify-center gap-2 text-xs text-gray-500">
                <div>created By: {space.createdBy?.name}</div>|
                <div>members count: {space.membersCount} </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Spaces;
