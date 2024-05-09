import { Box, Button, Grid, Paper, Typography } from "@mui/material";

import { StyledBackgroundBox, StyledBox } from "@/styles/common";
import { CategoryCard, CustomCarousel, ProductCard } from "@/components/common";
import { Footer, Header } from "@/components/landingPageComp";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ImagesPath, SellersImages, TempImages } from "@/constants";
import { RequestBanner } from "@/components/home";

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
      <Box>
        <Header />
      </Box>

      <StyledBox>
        {/* Banner Section */}
        <StyledBackgroundBox className="content-box no-background ">
          <Grid sx={{ marginTop: 15, marginBottom: 5 }} container spacing={2}>
            {/* First Column */}
            <Grid item xs={7}>
              <Paper
                style={{
                  height: "100%",
                  borderRadius: 10,
                }}
                elevation={8}
              >
                {/* Image with text */}
                <Box
                  position="relative"
                  style={{
                    overflow: "hidden",
                    maxWidth: "818.45px",
                    height: "100%",
                    borderRadius: 10,
                  }}
                >
                  <img
                    src={ImagesPath.HomeBanner01}
                    alt="Image not found"
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(6, 150, 88, 0.6)",
                    }}
                  />

                  <Box position="absolute" top="25%" left="0" p={2} zIndex={1}>
                    <Typography
                      variant="h3"
                      className="heading-text"
                      color="white"
                      sx={{ width: "70%", fontWeight: "500" }}
                    >
                      Build Everything You Need
                    </Typography>
                    <Box
                      component="section"
                      sx={{
                        borderLeft: 4,
                        color: "#84D187",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: 1,
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          className="para-text"
                          variant="body1"
                          color="white"
                          sx={{
                            paddingY: 2,
                          }}
                        >
                          Sale up to
                          <span
                            style={{
                              backgroundColor: "#39C64E",
                              marginLeft: 4,
                              padding: "0px 6px",
                              borderRadius: 6,
                            }}
                          >
                            30% OFF
                          </span>
                        </Typography>

                        <Typography
                          className="para-text"
                          variant="body1"
                          color="#FFFFFF"
                        >
                          Free Shipping on all your order
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{}}>
                      <Button
                        className="para-text   radius-0"
                        variant="contained"
                        type="submit"
                        style={{
                          borderRadius: 100,
                          backgroundColor: "#FFF",
                          marginTop: 10,
                          width: "25%",
                        }}
                      >
                        <Typography
                          variant="body1"
                          fontWeight={"600"}
                          color="#39C64E"
                        >
                          Send Now
                        </Typography>
                        <ArrowForwardIcon style={{ fill: "#39C64E" }} />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            {/* Second Column */}
            <Grid item container xs={5} spacing={2}>
              {/* First Row */}
              <Grid item xs={12}>
                <Paper
                  style={{
                    height: "100%",
                    position: "relative",
                    borderRadius: 10,
                  }}
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    style={{
                      borderRadius: 10,
                      backgroundImage: `url(${ImagesPath.HomeBanner02})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    style={{
                      borderRadius: 10,
                      backgroundImage:
                        "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(6, 150, 88, 0.2)",
                    }}
                  />

                  <Box
                    width={"100%"}
                    position="absolute"
                    top={10}
                    left={0}
                    p={2}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems={"center"}
                    >
                      <Typography color="white">
                        Summer Sale
                        <span style={{ fontWeight: "600", marginLeft: 2 }}>
                          75% OFF
                        </span>
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight={"600"}
                        color="white"
                      >
                        Construction Tools
                      </Typography>
                    </Box>
                    <Box position="absolute" sx={{ width: "30%" }} right={1}>
                      <Button
                        className="para-text  radius-0"
                        variant="text"
                        type="submit"
                        sx={{ borderWidth: 0 }}
                      >
                        <Typography
                          variant="body1"
                          fontWeight={"600"}
                          color="#39C64E"
                        >
                          Shop Now
                        </Typography>
                        <ArrowForwardIcon style={{ fill: "#39C64E" }} />
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              {/* Second Row */}
              <Grid item xs={12}>
                <Paper
                  style={{
                    height: "100%",
                    position: "relative",
                    borderRadius: 10,
                  }}
                >
                  {/* Image with text */}

                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    style={{
                      borderRadius: 10,
                      backgroundImage: `url(${ImagesPath.HomeBanner03})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    style={{
                      borderRadius: 10,
                      backgroundImage:
                        "linear-gradient(to right, rgba(0, 0, 0, 0.8) , rgba(6, 150, 88, 0.6)",
                    }}
                  />
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    top={0}
                    alignSelf={"center"}
                  >
                    <Typography
                      variant="body1"
                      color="white"
                      sx={{ textAlign: "center" }}
                    >
                      Best Deal
                    </Typography>
                    <Typography
                      sx={{ textAlign: "center", paddingX: 14 }}
                      fontWeight={"600"}
                      fontSize={"30px"}
                      color="white"
                    >
                      Special Products Deal of the Month
                    </Typography>

                    <Box>
                      <Button
                        className="para-text   radius-0"
                        variant="text"
                        type="submit"
                        sx={{ borderWidth: 0, alignSelf: "center" }}
                      >
                        <Typography
                          sx={{ textAlign: "center" }}
                          variant="body1"
                          fontWeight={"600"}
                          color="#39C64E"
                        >
                          Shop Now
                        </Typography>
                        <ArrowForwardIcon style={{ fill: "#39C64E" }} />
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          {/* CATEGORIES SECTION */}

          <h4 className="sub-heading-text">
            <span className="line-span-holder">
              <span className="line-span" />
              <span className="line-span" />
            </span>
            OUR CATEGORIES
          </h4>

          <Grid
            container
            sx={{
              marginY: 6,
              width: "100%",
            }}
          >
            {categories.map(({ name }) => (
              <CategoryCard name={name} />
            ))}
          </Grid>

          {/* PRODUCTS SALE SECTION */}

          <h4 className="sub-heading-text">
            <span className="line-span-holder">
              <span className="line-span" />
              <span className="line-span" />
            </span>
            FLASH SALE
          </h4>

          <Grid
            container
            sx={{
              marginY: 6,
              width: "100%",
            }}
            alignItems="center"
            justifyContent="center"
          >
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                avatar={TempImages.DummyTwo}
                title={product.title}
                discountedPrice={product.discountedPrice}
                actualPrice={product.actualPrice}
                rating={product.rating}
              />
            ))}
          </Grid>

          {/* TRUSTED SELLERS */}

          <h4 className="sub-heading-text">
            <span className="line-span-holder">
              <span className="line-span" />
              <span className="line-span" />
            </span>
            OUR TRUSTED SELLERS
          </h4>
          <Box sx={{ flexDirection: "column", marginY: 10 }}>
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

          <h4 className="sub-heading-text">
            <span className="line-span-holder">
              <span className="line-span" />
              <span className="line-span" />
            </span>
            OUR SELLING PRODUCTS
          </h4>

          <Grid
            container
            sx={{
              marginY: 6,
              width: "100%",
            }}
            alignItems="center"
            justifyContent="center"
          >
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                avatar={TempImages.DummyThree}
                title={product.title}
                discountedPrice={product.discountedPrice}
                actualPrice={product.actualPrice}
                rating={product.rating}
              />
            ))}
          </Grid>

          {/* SHOP BY BRANDS */}

          <h4 className="sub-heading-text">
            <span className="line-span-holder">
              <span className="line-span" />
              <span className="line-span" />
            </span>
            SHOP BY BRANDS
          </h4>

          <CustomCarousel
            logos={[
              SellersImages.BrandImage01,
              SellersImages.BrandImage02,
              SellersImages.BrandImage03,
              SellersImages.BrandImage04,
              SellersImages.BrandImage05,
              SellersImages.BrandImage06,
            ]}
          />

          <RequestBanner />
        </StyledBackgroundBox>
      </StyledBox>
      <Footer />
    </>
  );
};
