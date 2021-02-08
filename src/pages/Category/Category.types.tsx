import { CategoryTypes } from "../../components/SideNav/SideNav.types";

export type Props = {};

export type ParamsType = {
  limit: number;
  category_ids?: number;
  page: number;
  size?: "full" | "med" | "small" | "thumb";
  order?: "RANDOM" | "ASC" | "DESC";
};

export type DataType = {
  breeds: any;
  categories: CategoryTypes[];
  id: string;
  url: string;
  width: number;
  height: number;
};
