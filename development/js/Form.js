import React, { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Form = (props ) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        motivation: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const [sub, setSub] = useState(false);

    const toggleForm = () => {
        props.handleClose();
    }

    const handleSubmit = (event) => {
        const data = {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            motivation: form.motivation,
        };

        fetch(`http://localhost:3005/candidates`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        event.preventDefault();

        setSub(true);


        setTimeout(() => {
            setSub(false);
            setForm({ reset: true });
            toggleForm()
        }, 2500);
    };

    return (
        <div className="formBackground">
            <div className="formWrapper">
                {sub && <div className="booking">Booking a seat...</div>}
                <form onSubmit={handleSubmit} className="form">
                    <fieldset>
                        <label className="form__fields">
                            <p>First name</p>
                            <input
                                className="form__formInput"
                                id="standard-basic"
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                value={form.firstName || ''}
                            />
                        </label>
                        <label className="form__fields">
                            <p>Last name</p>
                            <input
                                className="form__formInput"
                                id="filled-basic"
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                value={form.lastName || ''}
                            />
                        </label>
                        <label className="form__fields">
                            <p>Email address</p>
                            <input
                                className="form__formInput"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={form.email || ''}
                            />
                        </label>
                        <label className="form__formTextarea">
                            <p className="form__formTextarea--p">Why do you want to go to Mars?</p>
                            <textarea
                                className="form__formTextarea--t"
                                name="motivation"
                                onChange={handleChange}
                                value={form.motivation || ''}
                            />
                        </label>
                    </fieldset>
                    <button className="submitBtn" type="submit">Sign up</button>
                    <CloseRoundedIcon className="close" fontSize="large" onClick={props.handleClose}
                    />
                    <div className="rocket"></div>
                </form>
            </div>
        </div>
    )
};

export default Form;