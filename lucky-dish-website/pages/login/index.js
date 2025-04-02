import PageHeader from "../../components/pageheader.js";
import SignUp from "../../components/signup.js";
import SignIn from "../../components/signin.js";
import NavBar from "../../components/navbar.js";

const Login = () => {
    return (
        <>
            <PageHeader />
            <h3>Sign Up</h3>
            <SignUp />
            <h3>Sign In</h3>
            <SignIn />
            <NavBar />
        </>
    );
};

export default Login;
