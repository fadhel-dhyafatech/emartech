import { FC } from "react";
import { Header } from "../../components/landingPageComp/header";
import { Footer } from "../../components/landingPageComp/footer";
import { Box, Container, Grid, styled } from "@mui/material";
import BreadCrumbs from "../../components/common/breadcrumbs";
import ProjectListingFilters from "../../components/projectListingComp/filter";
import JobSearch from "../../components/projectListingComp/jobSearch";

const MainDiv = styled(Box)(({ theme }: any) => ({
  marginTop: "168px",
  "@media (max-width:768px)": {
    marginTop: "64px",
  },
  "& .listingFilterGrid": {
    marginTop: "26px",
    marginBottom: "5rem",
  },
  "& .auth-heading": {
    fontWeight: "700",
  },
  "& .headingSpanColor": {
    color: theme.palette.common.headingLinesGreen,
  },
}));

const ProjectListing: FC = () => {
  return (
    <>
      <Header />
      <MainDiv>
        <BreadCrumbs
          data={[
            { link: "/projectListing", text: "Home" },
            { link: "/projectListing", text: "Projects" },
          ]}
        />
        <Container maxWidth="xl" sx={{ marginTop: "4rem" }}>
          <h1 className="auth-heading">
            Find your <span className="headingSpanColor"> new contract </span>
            today
          </h1>
          <p className="para-text">Thousands of jobs are waiting for you.</p>
          <JobSearch />
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 3, md: 5 }}
            rowSpacing={5}
            className="listingFilterGrid"
            justifyContent={"center"}
          >
            <Grid item xs={12} sm={5} md={3} lg={3}>
              <ProjectListingFilters />
            </Grid>
            <Grid item xs={12} sm={7} md={6} lg={6}></Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              {/* <ProjectListingFilters /> */}
            </Grid>
          </Grid>
        </Container>
      </MainDiv>
      <Footer />
    </>
  );
};

export default ProjectListing;
