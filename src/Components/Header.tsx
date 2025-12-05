import { FaMoon, FaSun } from "react-icons/fa6";

function Header() {
    return (
        <header>
            <div className="main__nav">
                <h1>Where in the world?</h1>
                <div className="theme__tgl__con">
                    <span className="theme__tgl">
                        <FaMoon />
                        Dark Mode
                    </span>

                    <span className="theme__tgl">
                        <FaSun /> Light Mode
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;
