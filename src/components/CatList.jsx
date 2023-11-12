import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import axios from "axios";
import { CatItem } from "./CatItem";

export const CatList = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Card sx={{ marginTop: 2, bgcolor: "lavender" }}>
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item) => (
            <CatItem item={item} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
