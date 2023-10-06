import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", () => {
  render(<Todo task="make lunch" />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Todo task="eat dinner" />);
  expect(asFragment()).toMatchSnapshot();
});
