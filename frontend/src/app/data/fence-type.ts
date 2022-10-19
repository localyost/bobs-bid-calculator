import {FenceSize} from "./fence-size";

export interface FenceType {
  id: number
  name: string,
  positions?: FenceSize[];
}
