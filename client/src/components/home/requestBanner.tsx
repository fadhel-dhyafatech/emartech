import { ImagesPath } from "@/constants";

import {
  Box,
  Button,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const RequestBanner = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const ImageContainer = styled(Box)({
    position: "relative",
    maxWidth: "100%",
    height: "416px",
    overflow: "hidden",
    borderRadius: 10,
  });

  const Image = styled("img")({
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  });

  const GradientOverlay = styled("div")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    background:
      "linear-gradient(to right, rgba(0, 0, 0, 0.8) , rgba(6, 150, 88, 0.6))",
  });

  const ContentContainer = styled(Box)({
    position: "absolute",
    top: "25%",
    left: "10%",
    p: 2,
    zIndex: 1,
  });
  return (
    <Grid sx={{ width: "100%", marginY: 6 }}>
      <Grid item xs={12}>
        <ImageContainer>
          <Image src={ImagesPath.RequestBanner} alt="Image" />
          {!isSmallScreen && <GradientOverlay />}

          <ContentContainer>
            <Image
              src={ImagesPath.WhiteLogo}
              alt="Image"
              sx={{ width: "65%", height: "65%" }}
            />

            <Typography variant="h4" color="white" sx={{ marginY: 2 }}>
              ONE STEP SOLUTION FOR YOU
            </Typography>
            {!isSmallScreen && (
              <Button
                variant="contained"
                style={{ backgroundColor: "#38C64E", width: "50%" }}
              >
                Request a Quote
              </Button>
            )}
          </ContentContainer>
        </ImageContainer>
      </Grid>
    </Grid>
  );
};
