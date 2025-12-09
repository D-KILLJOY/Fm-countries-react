import { useState } from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    function themeToggle() {
        theme === "light" ? setTheme("dark") : setTheme("light");
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
