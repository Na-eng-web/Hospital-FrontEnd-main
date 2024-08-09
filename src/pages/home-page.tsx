import { Box, Button, Container, Grid } from "@mui/material";
import { Children, useEffect, useState } from "react";
import { request_getAllHospitals } from "../api/request/hospital-api";
// import hospitals from "../assets /data/hospitals";
import { Hospital } from "../api";
import { AddHospitalPopup } from "../components";
import CardComponent from "../components/cardComponent";
import { HeroImageGeneric } from "../components/hero-image/here-image-generic";

export const HomePage = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([] as Hospital[]);
  const [addHospital, setAddHospital] = useState<boolean>(false);
  const fetchHospitals = () => {
    request_getAllHospitals()
      .then((res) => {
        setHospitals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchHospitals();
  }, []);
  return (
    <Box minHeight={"50vh"} width={"100%"}>
      <HeroImageGeneric />
      <Container sx={{ m: 4 }}>
        <Grid container spacing={3}>
          {Children.toArray(
            hospitals.map((hospital: Hospital) => {
              return <CardComponent hospital={hospital} />;
            })
          )}
        </Grid>
      </Container>
      <Button onClick={() => setAddHospital(true)} color="primary">
        Add Hospital
      </Button>
      {addHospital && (
        <AddHospitalPopup onClose={() => setAddHospital(false)} />
      )}
    </Box>
  );
};
