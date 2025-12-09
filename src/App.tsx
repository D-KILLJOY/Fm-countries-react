import axios from "axios";

import Header from "./Components/Header";
import SearchFilter from "./Components/SearchFilter";
import { useState } from "react";

function App() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [filterStat, setFilterStat] = useState<boolean>(false);
    const [filter, setFilter] = useState("");

    function themeToggle() {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    function filterStatToggle() {
        setFilterStat((prev) => !prev);
    }

    function selectFilter(selRegion: string) {
        setFilter(selRegion);
    }

    async function getCountries() {
        try {
            const response = await axios.get(
                "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
            );
            console.log(response.data); // full list of countries
        } catch (error: any) {
            console.error("Error fetching countries:", error.message);
        }
    }

    getCountries();
    return (
        <>
            <Header themeStat={theme} themeTglFunc={themeToggle} />
            <SearchFilter
                fltrStat={filterStat}
                fltrStatFunc={filterStatToggle}
                fltr={filter}
                selFltrFunc={selectFilter}
            />
        </>
    );
}

export default App;
