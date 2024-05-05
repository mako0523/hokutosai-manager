"use client";

import React from "react";
import { Button, Container } from "@mui/material";

export const HomeButton = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        href="/"
        size="large"
        sx={{
          marginTop: "64px",
          marginBottom: "64px",
        }}
      >
        ホームへ戻る
      </Button>
    </Container>
  );
};
