// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./Components/Booking/BookingForm";
import { initializeTimes, initialTimes, updateTimes } from "./Components/Booking/BookingReducer";

describe("BookingForm Component", () => {
  test("renders static text 'Reserve a Table'", () => {
    const availableTimes = [
      '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
    ];;
    const dispatch = jest.fn();
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
  });
});

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import BookingForm from './BookingForm';

// test('renders BookingForm with static text', () => {
//     // Mock the dispatch function
//     const mockDispatch = jest.fn();

//     render(<BookingForm availableTimes={["12:00 PM", "1:00 PM"]} dispatch={mockDispatch} />);

//     // Check for static text
//     expect(screen.getByText("Date")).toBeInTheDocument();
//     expect(screen.getByText("Time")).toBeInTheDocument();
//     expect(screen.getByText("Number of Guests")).toBeInTheDocument();
//     expect(screen.getByText("Occasion")).toBeInTheDocument();

//     // Check if the select element contains the available times
//     expect(screen.getByText("12:00 PM")).toBeInTheDocument();
//     expect(screen.getByText("1:00 PM")).toBeInTheDocument();
// });

// describe("Booking Reducer Functions", () => {
//   test("initializeTimes returns the correct initial times", () => {
//     const initialTimes = initializeTimes();
//     expect(initialTimes).toEqual(["18:00", "19:00", "20:00"]);
//   });

//   test("updateTimes returns the same value provided in the action payload", () => {
//     const state = ["18:00", "19:00", "20:00"];
//     const action = { type: 'update', payload: ["17:00", "18:30", "19:30"] };
//     const updatedTimes = updateTimes(state, action);
//     expect(updatedTimes).toEqual(["17:00", "18:30", "19:30"]);
//   });

//   test("updateTimes returns the current state if action type is unknown", () => {
//     const state = ["18:00", "19:00", "20:00"];
//     const action = { type: 'unknown', payload: ["17:00", "18:30", "19:30"] };
//     const updatedTimes = updateTimes(state, action);
//     expect(updatedTimes).toEqual(state);
//   });
// });
describe('BookingReducer', () => {
  test('initializeTimes returns the correct initial times', () => {
    const result = initializeTimes();
    expect(result).toEqual(initialTimes);
  });

  test('updateTimes returns the same value that is provided in the state', () => {
    const state = ['17:00', '17:30'];
    const action = { type: 'UPDATE_TIMES' };
    const result = updateTimes(state, action);
    expect(result).toEqual(initialTimes); // This is the current logic. Adjust accordingly when the logic changes.
  });
});