import PageHeader from "../../components/pageheader.js";
import MenuBar from "../../components/menubar.js";
import SearchBar from "../../components/searchbar.js";
import ScrollMenu from "../../components/scrollmenu.js";
import NavBar from "../../components/navbar.js";

const Menu = () => {
    return (
        <>
            <PageHeader />
            <MenuBar />
            <SearchBar />
            <ScrollMenu />
            <NavBar />
        </>
    );
};

export default Menu;
