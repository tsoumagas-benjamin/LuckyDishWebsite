import PageHeader from "../../components/pageheader.js";
import SignUp from "../../components/signup.js";
import SignIn from "../../components/signin.js";
import NavBar from "../../components/navbar.js";
import Head from "next/head";

const Login = () => {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login to your account" />
            </Head>
            <PageHeader />

            <SignUp />

            <SignIn />
            <NavBar />
        </>
    );
};

export default Login;
