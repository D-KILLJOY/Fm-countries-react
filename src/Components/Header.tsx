import { FaMoon, FaSun } from "react-icons/fa6";

interface HeaderProps {
    themeStat: "dark" | "light";
    themeTglFunc: () => void;
}

function Header({ themeStat, themeTglFunc }: HeaderProps) {
    return (
        <header className="bg-element h-20 sticky shadow-md mb-12 top-0 z-50 w-full flex justify-center md:mb-15">
            <nav className="flex justify-between items-center h-full px-4 w-full max-w-7xl md:px-14 lg:px-4">
                <h1 className="text-main-text dark:text-main-text text-sm font-bold md:text-xl lg:text-2xl">
                    Where in the world?
                </h1>
                <div className="text-xs md:text-base" onClick={themeTglFunc}>
                    {themeStat === "light" ? (
                        <button
                            type="button"
                            className="flex items-center gap-2.5 cursor-pointer"
                        >
                            <FaMoon />
                            Dark Mode
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="flex items-center gap-2.5 cursor-pointer"
                        >
                            <FaSun /> Light Mode
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
