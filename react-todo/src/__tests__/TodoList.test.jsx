import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList"; // adjust path if needed

test("renders input and button", () => {
  render(<TodoList />);
  expect(screen.getByPlaceholderText(/add a new task/i)).toBeInTheDocument();
  expect(screen.getByText(/add task/i)).toBeInTheDocument();
});
