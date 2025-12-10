import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark" || savedTheme === "light") {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    function themeToggle() {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }

    return (
        <>
            <Header themeStat={theme} themeTglFunc={themeToggle} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Details/:region/:country" element={<Details />} />
            </Routes>
        </>
    );
}

export default App;
