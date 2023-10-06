import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add new todos", () => {
  const { getByLabelText, getByText, queryByText } = render(<TodoList />);

  const input = getByLabelText("New Todo:");
  fireEvent.change(input, { target: { value: "test todo" } });
  const addButton = getByText("Add");
  fireEvent.click(addButton);

  expect(queryByText("test todo")).toBeInTheDocument();

  const removeButton = getByText("X");
  fireEvent.click(removeButton);

  expect(queryByText("test todo")).not.toBeInTheDocument();
});
