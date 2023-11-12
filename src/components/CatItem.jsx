import React from "react";
import { Grid, Button } from "@mui/material";

export const CatItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Button variant="contained" fullWidth>
        {item}
      </Button>
    </Grid>
  );
};
