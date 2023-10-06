import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", () => {
  render(<NewTodoForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("allows users to fill out form", () => {
  const { getByLabelText } = render(<NewTodoForm />);
  const input = getByLabelText("New Todo:");
  fireEvent.change(input, { target: { value: "new todo item" } });
  expect(input.value).toBe("new todo item");
});
