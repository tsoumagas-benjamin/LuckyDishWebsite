import styles from "@/styles/Home.module.css";
import Link from "next/link";
import NavBar from "@/components/NavBar.js";
import PageHeader from "../../components/PageHeader.js";
import Footer from "@/components/Footer.js";

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
            <p style={{ textAlign: "center" }}>
                Your go-to spot for comforting, flavorful meals made with love.{" "}
                <br></br>
                At Lucky Dish, we serve up delicious dishes inspired by
                tradition and crafted for today’s taste.
            </p>

            <br></br>
            <Footer />
        </>
    );
}
