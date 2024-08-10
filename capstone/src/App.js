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
import OrderPage from './Components/Homepage/OrderPage';
import Menu from './Components/Homepage/Menu';
import About from './Components/Homepage/About';
import CartPage from './Components/Homepage/CartPage';
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
      navigate('/LittleLemon/confirmed');
    } else {
      console.error('Failed to submit the booking');
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/LittleLemon" element={<Homepage />} />
        <Route path="/LittleLemon/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/LittleLemon/confirmed" element={<ConfirmedBooking />} />
        <Route path='/LittleLemon/form' element={<Login />} />
        <Route path='/LittleLemon/order' element={<OrderPage />} />
        <Route path='/LittleLemon/menu' element={<Menu />} />
        <Route path='/LittleLemon/about' element={<About />} />
        <Route path="/LittleLemon/cart" element={<CartPage />} />



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
