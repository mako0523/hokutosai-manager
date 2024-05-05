"use client";

import React from "react";
import styled from "styled-components";
import { Button, Link } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { voteNames, toJapaneseVoteName } from "../utils/vote-name";

const StyledVoteList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const VoteList = () => {
  return (
    <StyledVoteList>
      {voteNames.map((voteName, index) => {
        return (
          <Link
            key={index}
            component={Button}
            underline="none"
            startIcon={<NavigateNext />}
            href={`/${voteName}`}
          >
            {toJapaneseVoteName(voteName)}
          </Link>
        );
      })}
    </StyledVoteList>
  );
};
