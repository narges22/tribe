import React, { FC, useEffect } from "react";
import { simplifyPaginatedResult } from "@tribeplatform/react-sdk/utils";
import { PaginatedSpace } from "@tribeplatform/gql-client/types";
import { useTribeClient } from "@tribeplatform/react-sdk";
import { Link } from "react-router-dom";

const Spaces: FC = () => {
  const { client } = useTribeClient();
  const [spaces, setSpaces] = React.useState<PaginatedSpace>({
    nodes: [],
    pageInfo: {
      endCursor: undefined,
      hasNextPage: false,
    },
    totalCount: 0,
  });

  useEffect(() => {
    client.spaces
      .list(
        {
          limit: 10,
        },
        "all"
      )
      .then((res) => {
        setSpaces(res);
      });
  }, []);

  return (
    <div className="lg:w-3/4 m-auto flex flex-col">
      {spaces?.nodes?.map((space, i) => (
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
