import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList component", () => {
  // ---------------------------
  // Test 1: Basic rendering
  // ---------------------------
  it("renders the input field and add button", () => {
    render(<TodoList />);

    // Check that the input field is present
    expect(screen.getByPlaceholderText(/Add a new task/i)).toBeInTheDocument();

    // Check that the "Add" button is present
    expect(screen.getByText(/Add/i)).toBeInTheDocument();
  });

  // ---------------------------
  // Test 2: Adding a new todo
  // ---------------------------
  it("adds a new todo when Add button is clicked", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add/i);

    // Type into input field
    fireEvent.change(input, { target: { value: "Learn React" } });

    // Click "Add" button
    fireEvent.click(addButton);

    // The new todo should now appear in the list
    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });

  // ---------------------------
  // Test 3: Prevent adding empty todos
  // ---------------------------
  it("does not add empty todos", () => {
    render(<TodoList />);
    const addButton = screen.getByText(/Add/i);

    // Click "Add" with empty input
    fireEvent.click(addButton);

    // Nothing should be added to the list - check that no list items exist
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });

  // ---------------------------
  // Test 4: Toggling todo completion
  // ---------------------------
  it("toggles a todo's completed status", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add/i);

    // Add a new todo
    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    const todo = screen.getByText("Write tests");
    const toggleButton = screen.getByText(/Toggle/i);

    // Initially, todo should NOT have a line-through
    expect(todo).toHaveStyle("textDecoration: none");

    // Click "Toggle" button
    fireEvent.click(toggleButton);

    // Todo should now have a line-through
    expect(todo).toHaveStyle("textDecoration: line-through");
  });

  // ---------------------------
  // Test 5: Deleting a todo
  // ---------------------------
  it("deletes a todo when Delete button is clicked", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add/i);

    // Add a new todo
    fireEvent.change(input, { target: { value: "Clean room" } });
    fireEvent.click(addButton);

    // Confirm todo is in the document
    expect(screen.getByText("Clean room")).toBeInTheDocument();

    // Click "Delete" button
    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);

    // The todo should now be removed
    expect(screen.queryByText("Clean room")).not.toBeInTheDocument();
  });
});
