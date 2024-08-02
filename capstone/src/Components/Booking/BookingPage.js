import React from 'react';
import BookingForm from './BookingForm';
import Display from '../Display/Display';

function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <>
            <div>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
                <Display />

            </div>
        </>
    );
}

export default BookingPage;
