"use client";

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type VoteTableProps = {
  voteName: string;
};

export const VoteTable = async (props: VoteTableProps) => {
  const { voteName } = props;
  const votes = await fetchVotes(voteName);
  votes.sort((arg1, arg2) => arg2.count - arg1.count);
  let rank = 0;
  let prevVoteCount = NaN;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>順位</TableCell>
            <TableCell align="right">名前</TableCell>
            <TableCell align="right">投票数</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {votes.map((vote, index) => {
            if (vote.count !== prevVoteCount) {
              rank++;
            }
            prevVoteCount = vote.count;

            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {rank}
                </TableCell>
                <TableCell align="right">{vote.name}</TableCell>
                <TableCell align="right">{vote.count}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

type VoteProps = {
  name: string;
  count: number;
};

const fetchVotes = async (voteName: string): Promise<VoteProps[]> => {
  const res = await fetch(`https://hokutofes.com/api/vote/${voteName}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return [];
  }
  return res.json();
};
