import React, { useState, useEffect } from 'react';
import "./Booking.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaClock, FaUserFriends, FaWineGlassAlt, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { addDays } from 'date-fns';


const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
    const [date, setDate] = useState(localStorage.getItem('date') ? new Date(localStorage.getItem('date')) : null);
    const [time, setTime] = useState(localStorage.getItem('time') || '');
    const [guests, setGuests] = useState(localStorage.getItem('guests') || '');
    const [occasion, setOccasion] = useState(localStorage.getItem('occasion') || '');
    const [seating, setSeating] = useState(localStorage.getItem('seating') || 'Indoor');

    const [errors, setErrors] = useState({});
    const [dropdownOpen, setDropdownOpen] = useState({
        date: false,
        time: false,
        guests: false,
        occasion: false
    });


    useEffect(() => {
        if (date) {
            dispatch({ type: 'UPDATE_TIMES', date: date });
        }
    }, [date, dispatch]);
    const toggleDropdown = (field) => {
        setDropdownOpen(prev => ({ ...prev, [field]: !prev[field] }));
    };
    const handleDateChange = (date) => {
        setDate(date);
        localStorage.setItem('date', date.toISOString().split('T')[0]);
        setErrors(prev => ({ ...prev, date: '' }));
        setDropdownOpen((prev) => ({
            ...prev,
            date: false,
        }));
    };
    const handleTimeChange = (time) => {
        setTime(time);
        localStorage.setItem('time', time);
        setErrors(prev => ({ ...prev, time: '' }));
        toggleDropdown('time');
    };

    const handleGuestsChange = (guests) => {
        setGuests(guests);
        localStorage.setItem('guests', guests);
        setErrors(prev => ({ ...prev, guests: '' }));

        toggleDropdown('guests');
    };

    const handleOccasionChange = (occasion) => {
        setOccasion(occasion);
        localStorage.setItem('occasion', occasion);
        setErrors(prev => ({ ...prev, occasion: '' }));
        toggleDropdown('occasion');
    };


    const clearForm = () => {

        localStorage.removeItem('date');
        localStorage.removeItem('time');
        localStorage.removeItem('guests');
        localStorage.removeItem('occasion');
        localStorage.removeItem('seating');
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        const newErrors = {};
        if (!date) {
            newErrors.date = 'Select Date';
        } else if (!time) {
            newErrors.time = 'Select Time';
        } else if (!guests) {
            newErrors.guests = 'Select Number of guests';
        } else if (!occasion) {
            newErrors.occasion = 'Select Occasion';
        }
        setErrors(newErrors);



        if (Object.keys(newErrors).length === 0) {
            const formData = { date, time, guests, occasion, seating };
            submitForm(formData); // Call submitForm function passed via props
        }
    };

    return (
        <div className='form'>
            <h2>Reservations</h2>
            <form className='form-area' onSubmit={handleSubmit}>
                <div className='form-input' >
                    <div>
                        <input
                            type="radio"
                            id="Indoor"
                            name="seating"
                            value="Indoor"
                            checked={seating === 'Indoor'}
                            onChange={(e) => setSeating(e.target.value)}
                        />
                        <label htmlFor="Indoor">Indoor Seating</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="Outdoor"
                            name="seating"
                            value="Outdoor"
                            checked={seating === 'Outdoor'}
                            onChange={(e) => setSeating(e.target.value)}
                        />
                        <label htmlFor="Outdoor">Outdoor Seating</label>
                    </div>


                    <div className="dropdown">
                        <label>Date</label>
                        <div className={`dropdown-btn ${date ? 'selected' : ''}`}
                            onClick={() => toggleDropdown('date')}>
                            {!date && <FaCalendarAlt />}
                            <span>{date ? date.toLocaleDateString() : 'Select Date'}</span>
                            {dropdownOpen.date ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        {dropdownOpen.date && (
                            <div className="dropdown-menu datepicker-container">
                                <DatePicker
                                    selected={date}
                                    onChange={handleDateChange}
                                    inline
                                    minDate={addDays(new Date(), 1)}

                                    required
                                />
                            </div>
                        )}
                        {errors.date && <div className="error">{errors.date}</div>}
                    </div>



                    <div className="dropdown">
                        <label>Time</label>
                        <div
                            className={`dropdown-btn ${time ? 'selected' : ''}`}
                            onClick={() => toggleDropdown('time')}
                        >
                            {!time && <FaClock />}
                            <span>{time || 'Select Time'}</span>
                            {dropdownOpen.time ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        {dropdownOpen.time && (
                            <div className="dropdown-menu value">
                                {availableTimes.map((availableTime, index) => (
                                    <div
                                        key={index}
                                        className="dropdown-item"
                                        onClick={() => handleTimeChange(availableTime)}

                                    >
                                        {availableTime}
                                    </div>
                                ))}
                            </div>
                        )}
                        {errors.time && <div className="error">{errors.time}</div>}
                    </div>

                    <div className="dropdown">
                        <label>Number of Diners</label>
                        <div className={`dropdown-btn ${guests ? 'selected' : ''}`} onClick={() => toggleDropdown('guests')}>
                            {!guests && <FaUserFriends />}
                            <span>{guests || 'No: of'} {guests > 1 ? ' Diners' : ' Diner'}</span>
                            {dropdownOpen.guests ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        {dropdownOpen.guests && (
                            <ul className="dropdown-menu value">
                                {Array.from({ length: 10 }, (_, i) => i + 1).map(diner => (
                                    <li key={diner} onClick={() => handleGuestsChange(diner)}
                                    >{diner} Diner{diner > 1 ? 's' : ''}</li>
                                ))}
                            </ul>
                        )}
                        {errors.guests && <div className="error">{errors.guests}</div>}
                    </div>
                    <div className="dropdown">
                        <label>Occasion</label>
                        <div className={`dropdown-btn ${occasion ? 'selected' : ''}`} onClick={() => toggleDropdown('occasion')}>
                            {!occasion && <FaWineGlassAlt />}
                            <span>{occasion || 'Select Occasion'}</span>
                            {dropdownOpen.occasion ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        {dropdownOpen.occasion && (
                            <ul className="dropdown-menu ">
                                {['Birthday', 'Anniversary'].map(occ => (
                                    <li key={occ} onClick={() => handleOccasionChange(occ)}>
                                        {occ}</li>
                                ))}
                            </ul>
                        )}
                        {errors.occasion && <div className="error">{errors.occasion}</div>}
                    </div>
                </div>
                <button className='btn reserve-btn' type="submit"  >Reserve a table</button>
            </form>
        </div>
    );
};

export default BookingForm;
