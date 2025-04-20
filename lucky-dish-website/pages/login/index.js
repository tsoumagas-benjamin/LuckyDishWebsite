import PageHeader from "@/components/pageheader.js";
import SignUp from "@/components/signup.js";
import SignIn from "@/components/signin.js";
import NavBar from "@/components/navbar";
import Head from "next/head";
import Footer from "@/components/footer";

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
