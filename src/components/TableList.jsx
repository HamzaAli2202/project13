import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { TableItem } from "./TableItem";

export const TableList = () => {
  const obj = { id: "1", name: "user22", age: "26", work: "programmer" };
  const [itemHeaders, setItemHeaders] = useState([]);
  const [itemRow, setItemRow] = useState([]);

  useEffect(() => {
    const keys = Object.keys(obj);
    setItemHeaders(keys);
    const values = Object.values(obj);
    setItemRow(values);
  }, []);
  return (
    <Grid container spacing={2}>
      <TableItem itemHeaders={itemHeaders} itemRow={itemRow} />
    </Grid>
  );
};
