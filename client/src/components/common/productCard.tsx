import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { FC } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface ProductCardProps {
  avatar: string;
  title: string;
  discountedPrice: string;
  actualPrice: string;
  rating: number;
}

export const ProductCard: FC<ProductCardProps> = ({
  avatar,
  title,
  discountedPrice,
  actualPrice,
  rating,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={2.39} xl={2} marginY={2}>
      <Card
        sx={{
          borderRadius: 0,
          boxShadow: 0,
          border: "0.94px solid #E6E6E6",
        }}
      >
        <CardContent>
          <Grid container alignItems="center">
            {/* First Row: Sale Label and Avatar */}
            <Grid item xs={12}>
              <Box position="relative">
                <Typography
                  variant="caption"
                  component="div"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bgcolor: "#EA4B48",
                    color: "white",
                    padding: "0px 8px",
                    borderRadius: "3.76px",
                  }}
                >
                  Sale 50%
                </Typography>
                <Box display="flex" justifyContent="center" padding={8}>
                  <Avatar src={avatar} />
                </Box>
              </Box>
            </Grid>
            {/*  Name of the product */}
            <Grid item xs={12}>
              <Typography fontSize={13} fontWeight={"700"}>
                {title}
              </Typography>
            </Grid>
            {/* Third Row: Price and Cart Icon */}
            <Grid item xs={12}>
              <Grid container>
                {/* Actual Price */}
                <Grid item xs={5}>
                  <Typography
                    fontWeight={"500"}
                    fontSize={15}
                    component="div"
                    sx={{ fontSize: 15 }}
                  >
                    <Box>{discountedPrice}</Box>
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontSize: 15 }}
                    color="#999999"
                  >
                    <Box
                      component="span"
                      sx={{ textDecoration: "line-through" }}
                    >
                      {actualPrice}
                    </Box>
                  </Typography>
                </Grid>
                {/*  Cart Icon */}
                <Grid item xs={2}>
                  <ShoppingCartIcon />
                </Grid>
              </Grid>
            </Grid>
            {/* Fourth Row: Rating */}
            <Grid item xs={12}>
              <Box>
                <Rating value={rating} precision={0.5} readOnly />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
