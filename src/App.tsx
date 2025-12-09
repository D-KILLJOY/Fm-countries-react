import axios from "axios";

import Header from "./Components/Header";
import SearchFilter from "./Components/SearchFilter";
import { useEffect, useState } from "react";
import Countries from "./Components/Countries";

function App() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [filterStat, setFilterStat] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("");
    const [searchInput, setSearchInput] = useState<string>("");
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

        if (selRegion === "") {
            setDispCountries(allCountries);
        } else {
            setDispCountries(
                allCountries.filter((filtered) => filtered.region === selRegion)
            );
        }
    }

    console.log(dispCountries);

    useEffect(
        function searchFilter() {
            if (searchInput === "") {
                setDispCountries(allCountries);
            } else {
                setDispCountries(
                    allCountries.filter((filtered) =>
                        filtered.name.official
                            .toLowerCase()
                            .includes(searchInput.toLowerCase())
                    )
                );
            }
        },
        [searchInput]
    );

    function updateSearch(searchVal: string) {
        const trimmed = searchVal.trim();
        setSearchInput(trimmed);
        console.log(trimmed);
    }

    useEffect(() => {
        async function getCountries() {
            try {
                const response = await axios.get(
                    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
                );
                setAllCountries(response.data);
                setFilter("");
            } catch (error: any) {
                console.error("Error fetching countries:", error.message);
            }
        }

        getCountries();
    }, []);

    useEffect(() => {
        setDispCountries(allCountries);
    }, [allCountries]);

    return (
        <>
            <Header themeStat={theme} themeTglFunc={themeToggle} />
            <SearchFilter
                fltrStat={filterStat}
                fltrStatFunc={filterStatToggle}
                fltr={filter}
                selFltrFunc={selectFilter}
                updSrch={updateSearch}
            />
            <Countries dispCountries={dispCountries} />
        </>
    );
}

export default App;
