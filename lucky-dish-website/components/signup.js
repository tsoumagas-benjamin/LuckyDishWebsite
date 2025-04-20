import Head from "next/head";
import SignUpForm from "./signupform";
import styles from "./signup.module.css"; // Import the CSS module

const SignUp = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Sign Up</h2>
            <SignUpForm />
        </div>
    );
};

export default SignUp;
