import { useState } from "react";
import styles from "./signinform.module.css"; // Import the CSS module

const SignInForm = () => {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Basic validation
        if (!emailOrUsername || !password) {
            setError("Please fill in all fields.");
            return;
        }

        //handle the form submission
        console.log("Form submitted:", { emailOrUsername, password });
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="emailOrUsername">Email or Username:</label>
                <input
                    type="text"
                    id="emailOrUsername"
                    value={emailOrUsername}
                    onChange={(e) => setEmailOrUsername(e.target.value)}
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
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.submitButton}>
                Sign In
            </button>
        </form>
    );
};

export default SignInForm;
