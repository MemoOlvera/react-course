import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

export const Form = () => {

    const focusRef = useRef();

    const initialForm = {
        username: '',
        email: '',
        password: '',
    };

    const { form, username, email, password, handleInputChange } = useForm(initialForm);

    const onSubmit = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        focusRef.current.focus();
    },[]);

    return (
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={ onSubmit }>
            <input
                type="text"
                name="username"
                placeholder="Your username"
                value={ username }
                onChange={ handleInputChange }
            />

            <input
                type="email"
                name="email"
                ref={ focusRef }
                placeholder="Your email"
                value={ email }
                onChange={ handleInputChange }
            />

            <input
                type="password"
                name="password"
                placeholder="Your password"
                value={ password }
                onChange={ handleInputChange }
            />
            <button>Send</button>
        </form>
    )
}
