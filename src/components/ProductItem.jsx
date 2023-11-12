import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const ProductItem = ({ item }) => {
  return (
    <Grid item xs={4}>
      <Card sx={{ bgcolor: "lavender" }} align="center">
        <CardContent>
          <h4>{item.title.slice(0, 25)}</h4>
          <h5>{item.description.slice(0, 75)}</h5>
          <img src={item.image} alt="" />
          <h3>{item.category}</h3>
        </CardContent>
      </Card>
    </Grid>
  );
};
