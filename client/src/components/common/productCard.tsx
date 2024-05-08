import React, {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
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
    <Grid item xs={12} sm={6} md={4} lg={2.2} xl={2}>
      <Card sx={{ width: 248 }}>
        <CardContent>
          <Grid container spacing={1} alignItems="center">
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
                    bgcolor: "red",
                    color: "white",
                    padding: "0px 8px",
                    borderRadius: 4,
                  }}
                >
                  Sale 50% off
                </Typography>
                <Box display="flex" justifyContent="center" padding={8}>
                  <Avatar src={avatar} />
                </Box>
              </Box>
            </Grid>
            {/*  Name of the product */}
            <Grid item xs={12}>
              <Typography variant="h6">{title}</Typography>
            </Grid>
            {/* Third Row: Price and Cart Icon */}
            <Grid item xs={12}>
              <Grid container>
                {/* Actual Price */}
                <Grid item xs={5} textAlign="center" flexDirection={"row"}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontSize: 15 }}
                  >
                    <Box>{discountedPrice}</Box>
                  </Typography>
                </Grid>
                <Grid item xs={5} textAlign="center" flexDirection={"row"}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontSize: 15 }}
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
                  <Box display="flex" justifyContent="center">
                    <ShoppingCartIcon />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* Fourth Row: Rating */}
            <Grid item xs={12}>
              <Box display="flex">
                <Rating value={rating} precision={0.5} readOnly />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
