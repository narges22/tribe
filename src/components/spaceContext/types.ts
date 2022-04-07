import { PaginatedSpace } from "@tribeplatform/gql-client/types";

export interface ISpaceContextType {
  GetSpaces: () => PaginatedSpace;
}
