import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build Todo App/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add todo/i), {
    target: { value: "New Task" },
  });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText(/New Task/i)).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText(/Build Todo App/i);
  const deleteBtn = screen.getByText(/Build Todo App/i).querySelector("button");
  fireEvent.click(deleteBtn);
  expect(todo).not.toBeInTheDocument();
});
