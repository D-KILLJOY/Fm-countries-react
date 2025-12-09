import { FaMoon, FaSun } from "react-icons/fa6";

interface HeaderProps {
    themeStat: "dark" | "light";
    themeTglFunc: () => void;
}

function Header({ themeStat, themeTglFunc }: HeaderProps) {
    return (
        <header className="bg-element py-6 px-4 shadow-lg mb-5">
            <div className="flex justify-between items-center">
                <h1 className="text-main-text dark:text-main-text text-sm font-bold">
                    Where in the world?
                </h1>
                <div className="text-xs" onClick={themeTglFunc}>
                    {themeStat === "light" ? (
                        <span className="flex items-center gap-2.5">
                            <FaMoon />
                            Dark Mode
                        </span>
                    ) : (
                        <span className="flex items-center gap-2.5">
                            <FaSun /> Light Mode
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
