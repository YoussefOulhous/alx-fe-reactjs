import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoForm from '../components/AddTodoForm';
import '@testing-library/jest-dom';

describe('AddTodoForm Component', () => {
    const mockAddTasks = jest.fn();

    test('renders input and button', () => {
        render(<AddTodoForm addtasks={mockAddTasks} />);
        expect(screen.getByPlaceholderText(/add a task/i)).toBeInTheDocument();
        expect(screen.getByText(/add!/i)).toBeInTheDocument();
    });

    test('adds a new task', () => {
        render(<AddTodoForm addtasks={mockAddTasks} />);
        const inputElement = screen.getByPlaceholderText(/add a task/i);
        const addButton = screen.getByText(/add!/i);

        fireEvent.change(inputElement, { target: { value: 'New Task' } }); // Simulate typing
        fireEvent.click(addButton); // Simulate form submission

        expect(mockAddTasks).toHaveBeenCalledWith('New Task'); // Verify addtasks is called with 'New Task'
    });
});
