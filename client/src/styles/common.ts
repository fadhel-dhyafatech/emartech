import { Box, styled, Collapse } from "@mui/material";

export const StyledBox = styled(Box)({
  margin: "25px 15px 20px",
  ".flex-center": {
    display: "block",
  },
  "@media(min-width: 480px)": {
    margin: "40px 25px 20px",
  },
  "@media(min-width: 768px)": {
    margin: "40px 40px 20px",
    ".flex-center": {
      display: "flex",
      alignItems: "center",
    },
    ".para-text-holder,.heading-text": {
      flex: "1",
    },
    ".para-text-holder .para-text": {
      marginLeft: "auto",
    },
  },
  "@media(min-width: 900px)": {
    ".para-text-holder .para-text": {
      maxWidth: "390px",
    },
  },
  "@media(min-width: 1080px)": {
    ".para-text-holder .para-text": {
      maxWidth: "450px",
    },
  },
  "@media(min-width: 1260px)": {
    ".para-text-holder .para-text": {
      maxWidth: "500px",
    },
  },
  "@media(min-width: 1800px)": {
    ".para-text-holder .para-text": {
      maxWidth: "650px",
    },
  },
});

export const StyledCollapse = styled(Collapse)({
  margin: "10px 0",
  width: "-webkit-fill-available",
});
