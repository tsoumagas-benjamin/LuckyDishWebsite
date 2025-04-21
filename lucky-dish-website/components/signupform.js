import { useState } from "react";
import styles from "./signupform.module.css";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setEmailError("");
        setPasswordError("");

        // Form validation
        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        // Check if emails match
        if (email !== confirmEmail) {
            setError("Emails do not match");
            return;
        }

        // Client-side check before using localStorage
        if (typeof window !== "undefined") {
            // Save user data to localStorage
            const userData = {
                email,
                username,
                password,
            };
            localStorage.setItem("userData", JSON.stringify(userData));
            console.log("User registered:", userData);
        }

        alert("Sign up successful!");
    };

    const validateForm = () => {
        let isValid = true;

        if (!email) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Email format is invalid");
            isValid = false;
        }

        if (!password) {
            setPasswordError("Password is required");
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            isValid = false;
        }

        return isValid;
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {emailError && <p className={styles.error}>{emailError}</p>}
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="confirmEmail">Confirm Email:</label>
                <input
                    type="email"
                    id="confirmEmail"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {passwordError && (
                    <p className={styles.error}>{passwordError}</p>
                )}
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.submitButton}>
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
