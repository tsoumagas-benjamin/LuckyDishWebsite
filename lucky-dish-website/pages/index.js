import styles from "@/styles/Home.module.css";
import About from "./about/index.js";
import Link from "next/link";
import NavBar from "@/components/navbar.js";
import PageHeader from "../components/pageheader.js";
import Footer from "@/components/footer.js";

export default function Home() {
    return (
        <>
            <PageHeader />
            <h2 style={{ textAlign: "center" }}>Welcome to Lucky Dish 🍽️</h2>
            <nav
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                }}
            >
                <Link href="pages/menu"></Link>
                <Link href="pages/about"></Link>
                <Link href="pages/login"></Link>
            </nav>
            <NavBar />
            <br></br>
            <Footer />
        </>
    );
}
