import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
    const mockToggleTask = jest.fn();
    const mockDeleteTask = jest.fn();
    const tasks = [
        { text: 'Task 1', completed: false },
        { text: 'Task 2', completed: true },
    ];

    test('renders tasks correctly', () => {
        render(<TodoList tasks={tasks} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);
        expect(screen.getByText('Task 1')).toBeInTheDocument(); // Check for Task 1
        expect(screen.getByText('Task 2')).toBeInTheDocument(); // Check for Task 2
    });

    test('toggles task completion', () => {
        render(<TodoList tasks={tasks} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);
        const taskElement = screen.getByText('Task 1'); // Find Task 1
        fireEvent.click(taskElement); // Simulate click
        expect(mockToggleTask).toHaveBeenCalledWith(0); // Check if toggleTask was called with index 0
    });

    test('deletes a task', () => {
        render(<TodoList tasks={tasks} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);
        const deleteButton = screen.getAllByText('Delete')[0]; // Find the delete button for the first task
        fireEvent.click(deleteButton); // Simulate click
        expect(mockDeleteTask).toHaveBeenCalledWith(0); // Check if deleteTask was called with index 0
    });
});
