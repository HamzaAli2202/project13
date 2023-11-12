import React, { useState, useEffect } from "react";
import { ProductItem } from "./ProductItem";
import { CatList } from "./CatList";
import { Grid } from "@mui/material";
import axios from "axios";

export const ProductList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CatList />
        </Grid>
        {data.map((item) => (
          <ProductItem item={item} />
        ))}
      </Grid>
    </React.Fragment>
  );
};
