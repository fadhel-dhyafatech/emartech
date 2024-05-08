import * as React from "react";
import { styled } from "@mui/material/styles";
import { InputBase, IconButton, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  color: "white",
  border: "1px solid #ccc",
  borderRadius: "40px",
  backgroundColor: "#d9d9d9",

  margin: "0px 10px",
  minWidth: "317px",
  height: "38px",
  width: "100%",
  "@media (max-width: 600px)": {
    margin: "0px 5px",
  },
});

const SearchInput = styled(InputBase)({
  margin: "8px",
});

export const SearchComponent: React.FC = () => {
  return (
    <SearchContainer>
      <SearchInput
        size="small"
        margin="dense"
        placeholder="Looking For..."
        fullWidth
      />
      <IconButton>
        <SearchIcon sx={{ color: "#9E9E9E" }} />
      </IconButton>
    </SearchContainer>
  );
};
