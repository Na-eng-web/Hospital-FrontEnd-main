import { Box } from "@mui/material";
import { doctorWithXray } from "../../assets/images";

export const HeroImageGeneric = () => {
  return (
    <Box
      zIndex={-1}
      minHeight={"75vh"}
      sx={{ borderBottomRightRadius: 300 }}
      bgcolor={"pink"}
      display={"flex"}
      justifyContent={"center"}
      width={"100%"}
      overflow="hidden"
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        maxWidth={"90%"}
        width={"85%"}
      >
        <Box textAlign={"center"} color="#1963e3">
          Manipaul Hospitals is one of the best multispeciality hospital in
          Bangalore. We provide world-class healthcare services & treatment at a
          reasonable cost.
        </Box>
        <Box
          width={"50%"}
          sx={{
            backgroundImage: `url(${doctorWithXray})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            mixBlendMode: "multiply",
          }}
        ></Box>
      </Box>
    </Box>
  );
};
