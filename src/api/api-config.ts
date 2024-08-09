import axios, { AxiosRequestConfig } from "axios";
import { Configuration, HospitalApi, PatientApi } from ".";

// import { HospitalApi, PatientApi } from "../../generated-client";
// import { Configuration } from "../../generated-client/configuration";
export const axiosConfig = (options: AxiosRequestConfig) => {
  return {
    config: new Configuration(),
    axiosInstance: axios.create({
      ...options,
    }),
    apiurl: "http://localhost:3000",
  };
};

export const conf = (options: AxiosRequestConfig) => {
  const { config, axiosInstance, apiurl } = axiosConfig(options);
  const hospital = new HospitalApi(config);
  const Patient = new PatientApi(config);
  return {
    hospital,
    Patient,
    axiosInstance,
    apiurl,
  };
};
