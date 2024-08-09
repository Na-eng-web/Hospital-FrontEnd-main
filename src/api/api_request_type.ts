import { RawAxiosRequestConfig } from "axios";
import { Hospital } from ".";

export type addHospitalType = {
  hospital?: Hospital | undefined;
  options?: RawAxiosRequestConfig | undefined;
};
