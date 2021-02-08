import { CategoryTypes } from "../../components/SideNav/SideNav.types";

export type Props = {};

export type ParamsType = {
  limit: number;
  category_ids?: number;
  page: number;
};

export type DataType = {
  breeds: any;
  categories: CategoryTypes[];
  id: string;
  url: string;
  width: number;
  height: number;
};
