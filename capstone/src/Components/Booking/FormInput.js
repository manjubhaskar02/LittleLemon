import React, { useState } from 'react';
import { validateEmail, validatePhone } from "../Fieldvalidation";



const ErrorMessage = ({ message }) => {
    return (
        <p className="FieldError">{message}</p>
    );
};
function FormInput({ onFormSubmit }) {
    const [firstName, setFirstName] = useState({ value: "", isTouched: false, });
    const [lastName, setLastName] = useState({ value: "", isTouched: false, });
    const [email, setEmail] = useState({ value: "", isTouched: false, });
    const [phoneNum, setPhoneNum] = useState({ value: "", isTouched: false, });
    const [errorMessage, setErrorMessage] = useState("");

    const validateFields = () => {
        if (!firstName.value.trim()) {
            setFirstName({ ...firstName, isTouched: true });
            setErrorMessage("First name is required.");
            return false;
        }
        if (!lastName.value.trim()) {
            setLastName({ ...lastName, isTouched: true });
            setErrorMessage("Last name is required.");
            return false;
        }
        if (!validateEmail(email.value)) {
            setEmail({ ...email, isTouched: true });
            setErrorMessage("Invalid email address.");
            return false;
        }
        if (!validatePhone(phoneNum.value)) {
            setPhoneNum({ ...phoneNum, isTouched: true });
            setErrorMessage("Invalid phone number.");
            return false;
        }
        return true;
    };


    // const getIsFormValid = () => {
    //     return (
    //         firstName.value.trim() &&
    //         lastName.value.trim() &&
    //         validateEmail(email) &&
    //         validatePhone(phoneNum)
    //     );
    // };

    const clearForm = () => {
        setFirstName({ value: "", isTouched: false, });
        setLastName({ value: "", isTouched: false, });
        setEmail({ value: "", isTouched: false, });
        setPhoneNum({ value: "", isTouched: false, });
        setErrorMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            onFormSubmit();
            clearForm();
        }

    };

    return (
        <form onSubmit={handleSubmit} >
            <div className="form-input form-area">

                <div className="Field ">
                    <label>
                        First name <sup>*</sup>
                    </label>
                    <input
                        className="dropdown-btn"
                        value={firstName.value}

                        onChange={(e) => {
                            setFirstName({ ...firstName, value: e.target.value });
                        }}
                        onBlur={() => {
                            setFirstName({ ...firstName, isTouched: true });
                        }}
                        placeholder="First name"
                    />
                    {firstName.isTouched && firstName.value.length < 2 ? (
                        <ErrorMessage message="First name must be at least 2 characters." />
                    ) : null}
                    {/* {firstName.isTouched && firstName.value.length < 2 ? (
                        <ErrorMessage />
                    ) : null} */}
                </div>
                <div className="Field">
                    <label>Last name  <sup>*</sup>
                    </label>
                    <input
                        className="dropdown-btn"
                        value={lastName.value}
                        onChange={(e) => {
                            setLastName({ ...lastName, value: e.target.value });
                        }}
                        onBlur={() => {
                            setLastName({ ...lastName, isTouched: true });
                        }}
                        placeholder="Last name"
                    />
                    {lastName.isTouched && lastName.value.length < 2 ? (
                        <ErrorMessage message="Last name must be at least 2 characters." />
                    ) : null}
                </div>
                <div className="Field">
                    <label>
                        Email address <sup>*</sup>
                    </label>
                    <input
                        className="dropdown-btn"
                        value={email.value}
                        onChange={(e) => {
                            setEmail({ ...email, value: e.target.value });
                        }}
                        onBlur={() => {
                            setEmail({ ...email, isTouched: true });
                        }}
                        placeholder="Email address"
                    />
                    {email.isTouched && !validateEmail(email.value) ? (
                        <ErrorMessage message="Invalid email address." />
                    ) : null}
                </div>
                <div className="Field">
                    <label>
                        Phone Number <sup>*</sup>
                    </label>
                    <input
                        className="dropdown-btn"
                        value={phoneNum.value}
                        onChange={(e) => {
                            setPhoneNum({ ...phoneNum, value: e.target.value });
                        }}
                        onBlur={() => {
                            setPhoneNum({ ...phoneNum, isTouched: true });
                        }}
                        placeholder="Phone No:"
                    />
                    {phoneNum.isTouched && !validatePhone(phoneNum.value) ? (
                        <ErrorMessage message="Invalid phone number." />
                    ) : null}
                </div>
                {errorMessage && <ErrorMessage message={errorMessage} />}
            </div>
            <button className='btn reserve-btn' type="submit"  >Confirm Reservation</button>

        </form>
    )
}
export default FormInput
