"use client";

import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
`;

type H1Props = {
  text: string;
};

export const H1 = (props: H1Props) => {
  const { text } = props;

  return <StyledH1>{text}</StyledH1>;
};
