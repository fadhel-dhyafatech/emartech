import { FC } from "react";
import { Box, Container } from "@mui/material";

export const OurPartners: FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center" }}>
      <Container sx={{ display: "flex", flexDirection:"column", alignItems:"center", justifyContent: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="Rectangle 1361 (1).png"/>
          <h4>OUR PARTNERS</h4>
          <img src="Rectangle 1361 (1).png"/>
        </Box>
        <h1>Build Everything You Need</h1>
      </Container>
      <Container sx={{ display:"flex" }}>
        <img src="Rectangle 1371.png"/>
        <img src="Rectangle 1372.png"/>
        <img src="Rectangle 1373.png"/>
        <img src="Rectangle 1374.png"/>
      </Container>
    </Box>
  );
};
