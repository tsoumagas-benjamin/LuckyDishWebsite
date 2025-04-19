import PageHeader from "../../components/PageHeader.js";
import SignUp from "../../components/SignUp.js";
import SignIn from "../../components/SignIn.js";
import NavBar from "../../components/NavBar.js";
import Head from "next/head";
import Footer from "@/components/Footer.js";

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
            <br></br>
            <Footer />
        </>
    );
};

export default Login;
