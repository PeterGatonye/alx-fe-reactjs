// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList"; // adjust path if needed

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", async () => {
    render(<TodoList />);

    fireEvent.change(screen.getByPlaceholderText("Add new todo"), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByText("Add"));

    await waitFor(() =>
      expect(screen.getByText("New Task")).toBeInTheDocument()
    );
  });

  test("toggles a todo", async () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Initially not completed
    expect(todoItem).toHaveStyle("text-decoration: none");

    // Click to toggle
    fireEvent.click(todoItem);

    await waitFor(() =>
      expect(todoItem).toHaveStyle("text-decoration: line-through")
    );
  });

  test("deletes a todo", async () => {
    render(<TodoList />);

    // Find all delete buttons
    const deleteButtons = screen.getAllByText("Delete");

    // Delete the 2nd todo (Build a Todo App)
    fireEvent.click(deleteButtons[1]);

    await waitFor(() =>
      expect(
        screen.queryByText("Build a Todo App")
      ).not.toBeInTheDocument()
    );
  });
});
