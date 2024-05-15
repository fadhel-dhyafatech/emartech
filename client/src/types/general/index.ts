import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export type Error = FetchBaseQueryError | SerializedError | undefined;

export interface IAPIError {
  data: {
    message: string;
  };
}

// export interface SvgComponentProps {
//   color?: string;
//   width?: number;
//   height?: number;
// }

// export interface IBreadCrumbPath {
//   key: string;
//   label: string;
//   link: string;
// }

// export interface IDateRange {
//   startDate: Date | null;
//   endDate: Date | null;
// }
