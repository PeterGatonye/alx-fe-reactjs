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
  // Test 1.5: Initial demo todos
  // ---------------------------
  it("renders initial demo todos", () => {
    render(<TodoList />);

    // Check that demo todos are present
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a todo app")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();

    // Check that the completed todo has line-through styling
    const completedTodo = screen.getByText("Build a todo app");
    expect(completedTodo).toHaveStyle("textDecoration: line-through");

    // Check that non-completed todos don't have line-through styling
    const activeTodo = screen.getByText("Learn React");
    expect(activeTodo).toHaveStyle("textDecoration: none");
  });

  // ---------------------------
  // Test 2: Adding a new todo
  // ---------------------------
  it("adds a new todo when Add button is clicked", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add/i);

    // Type into input field
    fireEvent.change(input, { target: { value: "New Task" } });

    // Click "Add" button
    fireEvent.click(addButton);

    // The new todo should now appear in the list
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  // ---------------------------
  // Test 3: Prevent adding empty todos
  // ---------------------------
  it("does not add empty todos", () => {
    render(<TodoList />);
    const addButton = screen.getByText(/Add/i);

    // Click "Add" with empty input
    fireEvent.click(addButton);

    // Should still have the initial 3 demo todos
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  // ---------------------------
  // Test 4: Toggling todo completion
  // ---------------------------
  it("toggles a todo's completed status", () => {
    render(<TodoList />);
    
    // Get the first demo todo and its toggle button
    const todo = screen.getByText("Learn React");
    const toggleButtons = screen.getAllByText(/Toggle/i);
    const toggleButton = toggleButtons[0]; // First toggle button

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
    
    // Confirm demo todo is in the document
    expect(screen.getByText("Build a todo app")).toBeInTheDocument();

    // Get all delete buttons and click the one for "Build a todo app"
    const deleteButtons = screen.getAllByText(/Delete/i);
    const deleteButton = deleteButtons[1]; // Second delete button (for "Build a todo app")
    fireEvent.click(deleteButton);

    // The todo should now be removed
    expect(screen.queryByText("Build a todo app")).not.toBeInTheDocument();
  });
});
