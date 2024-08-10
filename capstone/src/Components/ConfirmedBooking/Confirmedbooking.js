import React, { useEffect, useState } from 'react';
import "./ConfirmedBooking.css";
import { FaCalendarAlt, FaClock, FaUserFriends, FaWineGlassAlt } from 'react-icons/fa';
import FormInput from '../Booking/FormInput';
import Display from '../Display/Display';
import { useNavigate } from 'react-router-dom';




function ConfirmedBooking() {

    const navigate = useNavigate();

    const [bookingData, setBookingData] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    useEffect(() => {
        const data = localStorage.getItem('bookingData');
        if (data) {
            const parsedData = JSON.parse(data);

            if (parsedData.date) {
                parsedData.date = new Date(parsedData.date);
            }

            setBookingData(parsedData);
        }
    }, [])
    const handleFormSubmit = () => {
        setIsSubmitted(true);
    };



    return (
        <>

            <section className="confirm-booking">

                <h2>Confirm Booking </h2>


                <div className="booking-data ">

                    <div className='overlay'>
                        <h4 className='center'>Reservation Details</h4>
                        {bookingData ? (
                            <div>
                                <ul className='list-items'>

                                    <li> {<FaCalendarAlt />} <span>  {bookingData.date.toLocaleDateString()}</span></li>
                                    <li> {<FaClock />}<span> {bookingData.time}</span></li>
                                    <li> {<FaUserFriends />}<span> {bookingData.guests} {' Diners'}</span></li>
                                    <li> {<FaWineGlassAlt />}<span>{bookingData.occasion}</span></li>
                                </ul>
                                <p className='seating'>{bookingData.seating}{" Seating"}</p>
                                <button className='btn back-btn' onClick={() => navigate('/LittleLemon/booking')}>Back to Reservation Table </button>

                            </div>

                        ) : (
                            <p>No booking data available</p>
                        )}
                    </div>

                </div>
                <FormInput onFormSubmit={handleFormSubmit} />
                {isSubmitted && (

                    <div className='success-message'>
                        <p>Your Reservation has been successfully confirmed. We look forward to welcoming you!</p>
                        <p>Check your mail!</p>
                    </div>
                )}

            </section>
            <Display />
        </>
    );
};

export default ConfirmedBooking;
