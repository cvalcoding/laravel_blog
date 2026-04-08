import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { loginData } from "../../data/authData";
import formValidation from "../../utils/formValidation";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        error: {},
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const validation = () => {
        const error = formValidation(formData);
        setFormData((prevState) => ({ ...prevState, error }));
        return Object.keys(error).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const login = await loginData(formData);
            if (login?.token) {
                localStorage.setItem("token", login.data.access_token);
                localStorage.setItem("expiration", login.data.expiration_token);
            } else {
                const error = {};
                error.loginError = "Combinaison login and password failed";
                setFormData((prevState) => ({ ...prevState, error }));
            }
        } else {
            console.error(formData.error);
        }
    };

    return (
        <>
            <h1>Login</h1>
            {formData.error.loginError && (
                <div
                    className="alert alert-danger alert-dismissible"
                    role="alert"
                >
                    <p>{formData.error.loginError}</p>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Input
                        className={formData.error.email ? "form-error" : ""}
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formData.error.email && (
                        <p className="text-danger">{formData.error.email}</p>
                    )}
                </div>

                <div className="mb-3">
                    <Input
                        className={formData.error.password ? "form-error" : ""}
                        label="Password"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {formData.error.password && (
                        <p className="text-danger">{formData.error.password}</p>
                    )}
                </div>

                <div>
                    <Button>Submit</Button>
                </div>
            </form>
        </>
    );
}

export default Login;
