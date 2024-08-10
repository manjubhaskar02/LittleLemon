
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormInput from './Components/Booking/FormInput';
import BookingForm from './Components/Booking/BookingForm';
describe('FormInput Component', () => {
  const mockOnFormSubmit = jest.fn();

  it('should show error message if first name is less than 2 characters', () => {
    render(<FormInput onFormSubmit={mockOnFormSubmit} />);

    const firstNameInput = screen.getByPlaceholderText('First name');
    fireEvent.change(firstNameInput, { target: { value: 'A' } });
    fireEvent.blur(firstNameInput);

    expect(screen.getByText('First name must be at least 2 characters.')).toBeInTheDocument();
  });

  it('should show error message if last name is less than 2 characters', () => {
    render(<FormInput onFormSubmit={mockOnFormSubmit} />);

    const lastNameInput = screen.getByPlaceholderText('Last name');
    fireEvent.change(lastNameInput, { target: { value: 'B' } });
    fireEvent.blur(lastNameInput);

    expect(screen.getByText('Last name must be at least 2 characters.')).toBeInTheDocument();
  });

  it('should show error message if email is invalid', () => {
    render(<FormInput onFormSubmit={mockOnFormSubmit} />);

    const emailInput = screen.getByPlaceholderText('Email address');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    expect(screen.getByText('Invalid email address.')).toBeInTheDocument();
  });

  it('should show error message if phone number is invalid', () => {
    render(<FormInput onFormSubmit={mockOnFormSubmit} />);

    const phoneInput = screen.getByPlaceholderText('Phone No:');
    fireEvent.change(phoneInput, { target: { value: '123' } });
    fireEvent.blur(phoneInput);

    expect(screen.getByText('Invalid phone number.')).toBeInTheDocument();
  });

  it('should call onFormSubmit when all fields are valid', () => {
    render(<FormInput onFormSubmit={mockOnFormSubmit} />);

    const firstNameInput = screen.getByPlaceholderText('First name');
    const lastNameInput = screen.getByPlaceholderText('Last name');
    const emailInput = screen.getByPlaceholderText('Email address');
    const phoneInput = screen.getByPlaceholderText('Phone No:');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });

    fireEvent.submit(screen.getByRole('button', { name: /confirm/i }));

    expect(mockOnFormSubmit).toHaveBeenCalledTimes(1);
  });

  it('should clear the form on successful submit', () => {
    render(<FormInput onFormSubmit={mockOnFormSubmit} />);

    const firstNameInput = screen.getByPlaceholderText('First name');
    const lastNameInput = screen.getByPlaceholderText('Last name');
    const emailInput = screen.getByPlaceholderText('Email address');
    const phoneInput = screen.getByPlaceholderText('Phone No:');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });

    fireEvent.submit(screen.getByRole('button', { name: /confirm/i }));

    expect(firstNameInput.value).toBe('');
    expect(lastNameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(phoneInput.value).toBe('');
  });
});


describe('BookingForm', () => {
  const mockOnSubmit = jest.fn();
  const mockAvailableTimes = ['12:00 PM', '1:00 PM', '2:00 PM'];

  beforeEach(() => {
    render(<BookingForm onSubmit={mockOnSubmit} availableTimes={mockAvailableTimes} />);
  });

  it('should allow the user to select Indoor seating', () => {
    const indoorRadio = screen.getByLabelText('Indoor Seating');
    fireEvent.click(indoorRadio);
    expect(indoorRadio).toBeChecked();
  });

  it('should allow the user to select Outdoor seating', () => {
    const outdoorRadio = screen.getByLabelText('Outdoor Seating');
    fireEvent.click(outdoorRadio);
    expect(outdoorRadio).toBeChecked();
  });

  it('should display the date picker when the date dropdown is clicked', () => {
    const dateDropdown = screen.getByText('Select Date');
    fireEvent.click(dateDropdown);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should allow the user to select a time from the dropdown', () => {
    const timeDropdown = screen.getByText('Select Time');
    fireEvent.click(timeDropdown);
    const timeOption = screen.getByText(mockAvailableTimes[0]);
    fireEvent.click(timeOption);
    expect(screen.getByText(mockAvailableTimes[0])).toBeInTheDocument();
  });

  it('should allow the user to select the number of diners', () => {
    const guestsDropdown = screen.getByText('No: of Diner');
    fireEvent.click(guestsDropdown);
    const guestsOption = screen.getByText('3 Diners');
    fireEvent.click(guestsOption);
    expect(screen.getByText('3 Diners')).toBeInTheDocument();
  });

  it('should allow the user to select an occasion', () => {
    const occasionDropdown = screen.getByText('Select Occasion');
    fireEvent.click(occasionDropdown);
    const occasionOption = screen.getByText('Birthday');
    fireEvent.click(occasionOption);
    expect(screen.getByText('Birthday')).toBeInTheDocument();
  });


});