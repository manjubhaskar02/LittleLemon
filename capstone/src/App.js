import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import BookingPage from './Components/Booking/BookingPage';
import React, { useReducer } from 'react';
import ConfirmedBooking from './Components/ConfirmedBooking/Confirmedbooking';
import { fetchAPI, submitAPI } from './Components/Booking/BookingAPI';
import Login from './Components/Login';
const initializeTimes = () => fetchAPI(new Date());

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.date)); // This can be updated to return different times based on action.date
    default:
      return state;
  }
};
const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      localStorage.setItem('bookingData', JSON.stringify(formData));
      navigate('/confirmed');
    } else {
      console.error('Failed to submit the booking');
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path='/form' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}
export default App;
