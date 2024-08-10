import FormInput from "./Booking/FormInput"
import { useState } from "react";
function Login() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = () => {
        setIsSubmitted(true);
    };



    return (
        <div className="form">
            {/* <FormInput /> */}
            <FormInput onFormSubmit={handleFormSubmit} />
            {isSubmitted && (

                <div className='success-message'>
                    <p>Login Successful!</p>
                </div>
            )}
        </div>
    )
}
export default Login