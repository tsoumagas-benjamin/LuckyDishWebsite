import { useState, useEffect } from "react";
import styles from "./signinform.module.css";

const SignInForm = () => {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Check for remembered email/username on component mount
        const rememberedUser = localStorage.getItem("rememberedUser");
        if (rememberedUser) {
            setEmailOrUsername(rememberedUser);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Basic validation
        if (!emailOrUsername || !password) {
            setError("Please fill in all fields.");
            setIsLoading(false);
            return;
        }

        // Client-side check
        if (typeof window === "undefined") {
            setError("Please try again in your browser.");
            setIsLoading(false);
            return;
        }

        try {
            const storedUserData = localStorage.getItem("userData");

            if (!storedUserData) {
                setError("No account found. Please sign up first.");
                setIsLoading(false);
                return;
            }

            const userData = JSON.parse(storedUserData);
            const isEmailMatch = emailOrUsername === userData.email;
            const isUsernameMatch = emailOrUsername === userData.username;
            const isPasswordMatch = password === userData.password;

            if ((isEmailMatch || isUsernameMatch) && isPasswordMatch) {
                // Remember user for next time
                localStorage.setItem("rememberedUser", emailOrUsername);

                console.log("Sign in successful:", userData);
                alert("Sign in successful!");
            } else {
                setError("Invalid credentials. Please try again.");
            }
        } catch (err) {
            console.error("Error parsing user data:", err);
            setError("Error accessing account data. Please try again.");
        } finally {
            setIsLoading(false);
        }
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
                    autoComplete="username"
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
                    autoComplete="current-password"
                />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button
                type="submit"
                className={styles.submitButton}
                disabled={isLoading}
            >
                {isLoading ? "Signing In..." : "Sign In"}
            </button>
        </form>
    );
};

export default SignInForm;
