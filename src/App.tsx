import axios from "axios";

import Header from "./Components/Header";
import SearchFilter from "./Components/SearchFilter";
import { useEffect, useState } from "react";
import Countries from "./Components/Countries";

function App() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [filterStat, setFilterStat] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("empty");
    const [allCountries, setAllCountries] = useState<any[]>([]);
    const [dispCountries, setDispCountries] = useState<any[]>([]);

    function themeToggle() {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    function filterStatToggle() {
        setFilterStat((prev) => !prev);
    }

    function selectFilter(selRegion: string) {
        setFilter(selRegion);
    }

    useEffect(() => {
        async function getCountries() {
            try {
                const response = await axios.get(
                    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
                );
                setAllCountries(response.data);
                setFilter(""); // full list of countries
            } catch (error: any) {
                console.error("Error fetching countries:", error.message);
            }
        }

        getCountries();
    }, []);

    useEffect(() => {
        setDispCountries(allCountries);
    }, [filter]);

    console.log(allCountries);
    console.log(dispCountries);

    return (
        <>
            <Header themeStat={theme} themeTglFunc={themeToggle} />
            <SearchFilter
                fltrStat={filterStat}
                fltrStatFunc={filterStatToggle}
                fltr={filter}
                selFltrFunc={selectFilter}
            />
            <Countries dispCountries={dispCountries} />
        </>
    );
}

export default App;
