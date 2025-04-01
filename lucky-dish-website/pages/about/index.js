import PageHeader from "../../components/PageHeader.js";
import NavBar from "../../components/NavBar.js";

const About = () => {
    const contentStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <>
        <PageHeader />
        <div style={contentStyle}>
            <h3>Mission Statement:</h3>
            <p>Lorem Ipsum</p>

            <h3>Our History:</h3>
            <p>Lorem Ipsum</p>

            <h4>Phone: 1-849-573-8376</h4>
            <h5>Business Email: inquiries@luckydish.com</h5>
        </div>
        <NavBar />
        </>
    )
}

export default About;