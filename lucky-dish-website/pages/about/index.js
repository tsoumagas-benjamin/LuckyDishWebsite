import { useState, useEffect } from "react";
import PageHeader from "../../components/pageheader.js";
import NavBar from "../../components/navbar.js";
import Head from "next/head";

const About = () => {
    const contentStyle = {
        margin: "20px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <>
            <Head>
                <title>Lucky Dish</title>
                <meta name="description" content="About Us" />
            </Head>
            <PageHeader />
            <div style={contentStyle}>
                <h3>Mission Statement:</h3>
                <p>
                    At Lucky Dish, our mission is to create memorable dining
                    experiences by serving flavorful, heartfelt meals that
                    celebrate tradition, innovation, and togetherness. We’re
                    committed to using quality ingredients, embracing cultural
                    diversity in our dishes, and providing a warm, welcoming
                    space where everyone feels at home — one lucky bite at a
                    time.
                </p>

                <h3>Our History:</h3>
                <p>
                    At Lucky Dish, our journey began with a simple dream — to
                    bring people together through comforting, delicious food.
                    What started as a small family-owned kitchen has grown into
                    a vibrant restaurant where flavor, tradition, and community
                    come together. Inspired by recipes passed down through
                    generations and perfected with modern flair, every dish we
                    serve is crafted with care and a touch of luck. From our
                    very first customer to the bustling tables we serve today,
                    our story is one of passion, heart, and a deep love for
                    sharing good food with good people.
                </p>

                <h4>Phone: 1-849-573-8376</h4>
                <h5>Business Email: inquiries@luckydish.com</h5>
            </div>
            <NavBar />
        </>
    );
};

export default About;
