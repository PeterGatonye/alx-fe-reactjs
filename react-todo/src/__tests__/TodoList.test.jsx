import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  it("renders input and button", () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText(/Add a new task/i)).toBeInTheDocument();
    expect(screen.getByText(/Add/i)).toBeInTheDocument();
  });
});
