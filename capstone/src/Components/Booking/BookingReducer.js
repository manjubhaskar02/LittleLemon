
// import { fetchAPI } from './api'; // Ensure this path is correct
import { fetchAPI } from "./BookingAPI";

const initialTimes = fetchAPI(new Date()); // Initialize times for today

const initializeTimes = () => fetchAPI(new Date()); // Get available times for today

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(new Date(action.date)); // Fetch times for the selected date
        default:
            return state;
    }
};

export { initializeTimes, updateTimes };
