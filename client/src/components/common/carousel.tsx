import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";

interface LogoCarouselProps {
  logos: string[]; // Array of image URLs
}

export const CustomCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  const settings = {
    dots: true, // Show dots only if there is more than one logo
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    className: "center",
    centerMode: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: logos.length > 3, // Show dots only if there are more than 3 logos
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: logos.length > 2, // Show dots only if there are more than 2 logos
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: logos.length > 1, // Show dots only if there is more than one logo
        },
      },
    ],
  };

  return (
    <Box
      component="div"
      className="slider-container"
      justifyItems={"center"}
      alignItems={"center"}
      sx={{ marginY: 5 }}
    >
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};
