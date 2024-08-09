import { conf } from "../api-config";
import { addHospitalType } from "../api_request_type";

export const request_getAllHospitals = async () => {
  const endpoints = conf({});
  return await endpoints.hospital.hospitalGet();
};

export const request_addHospital = async (props: addHospitalType) => {
  const endpoints = conf({});
  return await endpoints.hospital.addHospitalPost({
    name: props.hospital?.name,
    address: props.hospital?.address,
    city: props.hospital?.city,
    email: props.hospital?.email,
    phone: props.hospital?.phone,
  });
};
