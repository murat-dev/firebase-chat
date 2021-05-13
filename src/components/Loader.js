import React from 'react';
import { Container, Grid } from "@material-ui/core";

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justify={"center"}
      >
        <Grid
          container
          alignItems={"center"}
          dicertion={"column"}
        >
          <div class="lds-hourglass"></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;