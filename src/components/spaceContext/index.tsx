import { PaginatedSpace } from "@tribeplatform/gql-client/types";
import { FC, useState } from "react";
import { NewContext } from "../../utils/newContext";
import { ISpaceContextType } from "./types";
import { useTribeClient } from "@tribeplatform/react-sdk";

export const [SpaceContext, useSpaceContext] = NewContext<ISpaceContextType>();

export const SpaceContextProvider: FC = ({ children }) => {
  const { client } = useTribeClient();
  const [spaces, setSpaces] = useState<PaginatedSpace>({
    nodes: [],
    pageInfo: {
      endCursor: undefined,
      hasNextPage: false,
    },
    totalCount: 0,
  });

  const fetchSpaces = () => {
    client.spaces
      .list(
        {
          limit: 10,
        },
        "all"
      )
      .then((res) => {
        setSpaces(res);
        return res;
      });
    return spaces;
  };

  const GetSpaces = () => {
    if (spaces.nodes && spaces.nodes?.length > 0) {
      return spaces;
    } else {
      return fetchSpaces();
    }
  };

  const onAddNewSpace = (name: string) => {
    return client.spaces.create({ input: { name } }).then((res) => {
      fetchSpaces();
    });
  };

  return (
    <SpaceContext.Provider value={{ GetSpaces, onAddNewSpace }}>
      {children}
    </SpaceContext.Provider>
  );
};
