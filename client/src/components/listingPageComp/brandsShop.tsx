import { FC } from "react";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }: any) => ({
  ".sub-heading-text": {
    display: "flex",
    alignItems: "center",
    color: theme.palette.common.headingLinesGreen,
    ".line-span-holder": {
      display: "inline-flex",
      flexDirection: "column",
      ".line-span": {
        display: "inline-block",
        width: "30px",
        height: "2px",
        background: "rgba(0, 0, 0, 0.87)",
        margin: "3px 15px 3px 0",
        "&.white": {
          background: "#fff",
        },
      },
    },
    ".line-span-holder:nth-child(2)": {
      ".line-span": {
        margin: "3px 0 3px 15px",
      },
    },
  },
}));

const ShopByBrands: FC = () => {
  return (
    <StyledBox>
      <h4 className="sub-heading-text">
        <span className="line-span-holder">
          <span className="line-span" />
          <span className="line-span" />
        </span>
        Shop By Brands
      </h4>
    </StyledBox>
  );
};
export default ShopByBrands;
