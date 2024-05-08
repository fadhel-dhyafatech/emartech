import { Box, Button, Grid, Paper, Typography } from "@mui/material";

import { StyledBox } from "@/styles/common";
import { CategoryCard, ProductCard } from "@/components/common";
import { Footer } from "@/components/landingPageComp";
import bannerimage from "@/assets/IMG-20240325-WA0010.jpg";
import bannerimage2 from "@/assets/IMG-20240325-WA0008.jpg";
import bannerimage3 from "@/assets/IMG-20240325-WA0009.jpg";

export const HomePage = () => {
  const categories = [
    {
      id: 1,
      name: "Build Material",
    },
    {
      id: 2,
      name: "Constuction Chemicals",
    },
    {
      id: 3,
      name: "Paint & Tools",
    },
    {
      id: 4,
      name: "Hand Tools",
    },
    {
      id: 5,
      name: "Plumbing",
    },
    {
      id: 6,
      name: "Sanitary Ware",
    },
    {
      id: 7,
      name: "Electrical",
    },
    {
      id: 8,
      name: "Lighting",
    },
    {
      id: 9,
      name: "Hardware",
    },
    {
      id: 10,
      name: "Saftey",
    },
    {
      id: 11,
      name: "Wood & Tools",
    },
    { id: 12, name: "New Arrivals" },
  ];

  const sampleProducts = [
    {
      id: 1,
      avatar: "/avatar1.jpg",
      title: "Product 1",
      discountedPrice: "AED 14.99",
      actualPrice: "AED 29.99",
      rating: 4,
    },
    {
      id: 2,
      avatar: "/avatar2.jpg",
      title: "Product 2",
      discountedPrice: "AED 19.99",
      actualPrice: "AED 39.99",
      rating: 3.5,
    },
    {
      id: 3,
      avatar: "/avatar3.jpg",
      title: "Product 3",
      discountedPrice: "AED 24.99",
      actualPrice: "AED 49.99",
      rating: 5,
    },
    {
      id: 4,
      avatar: "/avatar4.jpg",
      title: "Product 4",
      discountedPrice: "AED 17.99",
      actualPrice: "AED 34.99",
      rating: 4.5,
    },
    {
      id: 5,
      avatar: "/avatar5.jpg",
      title: "Product 5",
      discountedPrice: "AED 21.99",
      actualPrice: "AED 42.99",
      rating: 3,
    },
    {
      id: 6,
      avatar: "/avatar6.jpg",
      title: "Product 6",
      discountedPrice: "AED 27.99",
      actualPrice: "AED 55.99",
      rating: 4,
    },
    {
      id: 7,
      avatar: "/avatar7.jpg",
      title: "Product 7",
      discountedPrice: "AED 16.99",
      actualPrice: "AED 32.99",
      rating: 4.8,
    },
    {
      id: 8,
      avatar: "/avatar8.jpg",
      title: "Product 8",
      discountedPrice: "AED 20.99",
      actualPrice: "AED 41.99",
      rating: 3.7,
    },
    {
      id: 9,
      avatar: "/avatar9.jpg",
      title: "Product 9",
      discountedPrice: "AED 22.99",
      actualPrice: "AED 45.99",
      rating: 4.2,
    },
    {
      id: 10,
      avatar: "/avatar10.jpg",
      title: "Product 10",
      discountedPrice: "AED 19.99",
      actualPrice: "AED 39.99",
      rating: 4.9,
    },
  ];

  return (
    <>
      {/* <Box>
        <Header />
      </Box> */}

      <StyledBox>
        {/* Banner Section */}

        {/* <Grid className="flex-center" container spacing={2}> */}
        {/* First Section */}
        {/* <Grid item xs={12}> */}
        <Grid container spacing={2} sx={{ backgroundColor: "red" }}>
          {/* First Column */}
          <Grid item xs={8}>
            <Paper elevation={8}>
              {/* Image with text */}
              <Box position="relative">
                <img
                  src={bannerimage}
                  alt="Image not found"
                  style={{ width: "100%", height: "100%" }}
                />
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  textAlign="center"
                  bgcolor="rgba(0, 0, 0, 0.5)" /* Semi-transparent background */
                  p={2} /* Padding */
                >
                  <Typography variant="body1" color="white">
                    Text on First Column Image
                  </Typography>
                  <Button variant="contained" color="primary" size="large">
                    Your Button
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          {/* Second Column */}
          <Grid item xs={4}>
            <Grid
              container
              spacing={2}
              direction="column"
              sx={{ backgroundColor: "green" }}
            >
              {/* First Row */}
              <Grid item>
                <Paper>
                  {/* Image with text */}
                  <Box position="relative">
                    <img
                      src={bannerimage2}
                      alt="Second Column First Row Image"
                      style={{ width: "100%" }}
                    />
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      bgcolor="rgba(0, 0, 0, 0.5)" /* Semi-transparent background */
                      p={2} /* Padding */
                      width="100%"
                    >
                      <Typography variant="body1" color="white">
                        Text on Second Column First Row
                      </Typography>
                      <Button variant="contained" color="primary" size="large">
                        Your Button
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              {/* Second Row */}
              <Grid item>
                <Paper>
                  {/* Image with text */}
                  <Box position="relative">
                    <img
                      src={bannerimage3}
                      alt="Second Column Second Row Image"
                      style={{ width: "100%" }}
                    />
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      bgcolor="rgba(0, 0, 0, 0.5)" /* Semi-transparent background */
                      p={2} /* Padding */
                      width="100%"
                    >
                      <Typography variant="body1" color="white">
                        Text on Second Column Second Row
                      </Typography>
                      <Button variant="contained" color="primary" size="large">
                        Your Button
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* </Grid> */}

        {/* CATEGORIES SECTION */}
        <Box sx={{ flexDirection: "column" }}>
          <Typography variant="h6">OUR CATEGORIES</Typography>
          <Grid container>
            {categories.map(({ name }) => (
              <CategoryCard name={name} />
            ))}
          </Grid>
        </Box>

        {/* PRODUCTS SALE SECTION */}
        <Box sx={{ flexDirection: "column", marginY: 10 }}>
          <Typography variant="h6">FLASH SALE</Typography>
          <Grid container>
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                avatar={product.avatar}
                title={product.title}
                discountedPrice={product.discountedPrice}
                actualPrice={product.actualPrice}
                rating={product.rating}
              />
            ))}
          </Grid>
        </Box>

        {/* TRUSTED SELLERS */}

        <Box sx={{ flexDirection: "column", marginY: 10 }}>
          <Typography variant="h6">OUR TRUSTED SELLERS </Typography>

          <Box sx={{ display: "flex" }}>
            <Box>
              <img
                src="../../src/assets/Rectangle 1371.png"
                style={{ maxWidth: "100%", width: "auto", height: "100%" }}
              />
            </Box>
            <Box>
              <img
                src="../../src/assets/Rectangle 1372.png"
                style={{ maxWidth: "100%", width: "auto", height: "100%" }}
              />
            </Box>
            <Box>
              <img
                src="../../src/assets/Rectangle 1373.png"
                style={{ maxWidth: "100%", width: "auto", height: "100%" }}
              />
            </Box>
            <Box>
              <img
                src="../../src/assets/Rectangle 1374.png"
                style={{ maxWidth: "100%", width: "auto", height: "100%" }}
              />
            </Box>
          </Box>
        </Box>

        {/* SELLING PRODUCTS SECTION */}
        <Box sx={{ flexDirection: "column", marginY: 10 }}>
          <Typography variant="h6">OUR SELLING PRODUCTS</Typography>
          <Grid container>
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                avatar={product.avatar}
                title={product.title}
                discountedPrice={product.discountedPrice}
                actualPrice={product.actualPrice}
                rating={product.rating}
              />
            ))}
          </Grid>
        </Box>

        {/* SHOP BY BRANDS */}
      </StyledBox>
      <Footer />
    </>
  );
};
