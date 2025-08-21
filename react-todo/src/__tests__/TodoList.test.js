// src/__tests__/TodoList.test.js
import { render, screen } from "@testing-library/react";
import React from "react";
import TodoList from "../components/TodoList";
import { describe, it, expect } from "vitest";

describe("TodoList Component", () => {
  it("renders input and button", () => {
    // Render TodoList without JSX
    render(React.createElement(TodoList));
    
    // Check input exists
    expect(screen.getByPlaceholderText(/Add a new task/i)).toBeInTheDocument();

    // Check button exists
    expect(screen.getByText(/Add/i)).toBeInTheDocument();
  });
});
