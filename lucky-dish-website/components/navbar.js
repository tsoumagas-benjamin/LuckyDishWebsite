import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link href="/about">About Us</Link>
            </div>
            <div>
                <Link href="/menu">Menu</Link>
            </div>
            <div>
                <Link href="/login">Login</Link>
            </div>
        </nav>
    )
}

export default NavBar;