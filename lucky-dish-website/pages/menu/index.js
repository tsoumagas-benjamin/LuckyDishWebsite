import PageHeader from "../../components/pageheader.js";
import MenuBar from "../../components/menubar.js";
import SearchBar from "../../components/searchbar.js";
import ScrollMenu from "../../components/scrollmenu.js";
import NavBar from "../../components/navbar.js";
import Head from "next/head";

const Menu = () => {
    return (
        <>
            <Head>
                <title>Menu</title>
                <meta name="description" content="Lucky Dish Menu Items" />
            </Head>
            <PageHeader />
            <MenuBar />
            <SearchBar />
            <ScrollMenu />
            <NavBar />
        </>
    );
};

export default Menu;
