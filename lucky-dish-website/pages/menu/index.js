import PageHeader from "../../components/PageHeader.js";
import MenuBar from "../../components/menubar.js";
import SearchBar from "../../components/searchbar.js";
import ScrollMenu from "../../components/scrollmenu.js";
import NavBar from "../../components/NavBar.js";

const Menu = () => {
    return (
        <>
        <PageHeader />
        <div>
            <div>
                <MenuBar />
                <SearchBar />
            </div>
            <ScrollMenu />
        </div>
        <NavBar />
        </>
    )
}

export default Menu;