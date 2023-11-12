import React from "react";
import { Landing } from "./components/Landing";
import { Card, CardContent } from "@mui/material";
import "./components/common.css";

function App() {
  return (
    <Card sx={{ bgcolor: "yellowgreen" }}>
      <CardContent>
        <Landing />
      </CardContent>
    </Card>
  );
}

export default App;
