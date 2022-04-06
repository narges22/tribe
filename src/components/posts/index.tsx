import React, { FC, useEffect } from "react";
import { useTribeClient } from "@tribeplatform/react-sdk";
import { useParams } from "react-router-dom";
import { PaginatedPost } from "@tribeplatform/gql-client/types";

const Posts: FC = () => {
  const { client } = useTribeClient();
  let { id } = useParams();
  const [posts, setPosts] = React.useState<PaginatedPost>({
    nodes: [],
    pageInfo: {
      endCursor: undefined,
      hasNextPage: false,
    },
    totalCount: 0,
  });

  useEffect(() => {
    client.posts
      .list({
        limit: 10,
        spaceIds: [String(id)],
      })
      .then((res) => {
        setPosts(res);
      });
  }, [id]);

  return (
    <div className="lg:w-3/4 m-auto flex flex-col">
      {posts.nodes?.map((post, i) => (
        <div className="flex gap-2 bg-hacker-body p-2" key={post?.id}>
          <div className="flex flex-col justify-center">{i + 1}.</div>
          <div className="flex flex-col flex-grow">
            <div>{post.title}</div>
            <div className="flex gap-2 text-xs text-gray-500">
              <div>By {post.createdBy?.member?.name}</div>|
              <div>{post.reactionsCount} upvotes</div>|
              <div>{post.repliesCount} comments</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
