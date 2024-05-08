import React, {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { FC } from "react";
import Button from "@mui/material/Button";

export const CategoryCard: FC<any> = ({ name, image }) => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginY: 2 }}>
      <Card
        sx={{
          width: 187.58,
          height: 151.94,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <CardContent>
          <Box
            sx={{
              borderRadius: "50%",
              position: "relative",
              marginLeft: "-1px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                display: "flex",
                border: "1px solid black",
              }}
            >
              <Avatar
                src={image}
                sx={{ width: "100%", height: "100%", zIndex: 1 }}
              />
            </Box>
          </Box>
        </CardContent>
        <CardActions sx={{ alignSelf: "center" }}>
          {/* <Button
            sx={{
              border: "none",
              background: "none",
              boxShadow: "none",
              padding: "0",
              "& span:hover": {
                textDecoration: "underline",
              },
            }}
            href="#text-buttons"
          > */}
          <Typography variant="caption">{name}</Typography>
          {/* </Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
};
