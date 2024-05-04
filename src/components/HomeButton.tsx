"use client";

import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const StyledHomeButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export const HomeButton = () => {
  return (
    <>
      <StyledHomeButton>
        <Button variant="contained" href="/">
          ホームへ戻る
        </Button>
      </StyledHomeButton>
    </>
  );
};
