import Head from "next/head";
import SignInForm from "../components/signinform";
import styles from "./signin.module.css"; // Import the CSS module

const SignIn = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Sign In</h2>
            <SignInForm />
        </div>
    );
};

export default SignIn;
