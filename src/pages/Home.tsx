import { useEffect, useState } from "react";
import SearchFilter from "../Components/SearchFilter";
import Countries from "../Components/Countries";
import axios from "axios";

function Home() {
    const [filterStat, setFilterStat] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("");
    const [searchInput, setSearchInput] = useState<string>("");
    const [allCountries, setAllCountries] = useState<any[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
    const [dispCountries, setDispCountries] = useState<any[]>([]);

    function filterStatToggle() {
        setFilterStat((prev) => !prev);
    }

    function selectFilter(selRegion: string) {
        setFilter(selRegion);

        if (selRegion === "") {
            setFilteredCountries(allCountries);
        } else {
            setFilteredCountries(
                allCountries.filter((filtered) => filtered.region === selRegion)
            );
        }
    }

    useEffect(() => {
        async function getCountries() {
            try {
                const response = await axios.get(
                    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,languages"
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
        setFilteredCountries(allCountries);
    }, [allCountries]);

    useEffect(() => {
        setDispCountries(filteredCountries);
    }, [filteredCountries]);

    useEffect(
        function searchFilter() {
            if (searchInput === "") {
                setDispCountries(filteredCountries);
            } else {
                setDispCountries(
                    filteredCountries.filter((filtered) =>
                        filtered.name.common
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
    }

    return (
        <main>
            <SearchFilter
                fltrStat={filterStat}
                fltrStatFunc={filterStatToggle}
                fltr={filter}
                selFltrFunc={selectFilter}
                updSrch={updateSearch}
            />
            <Countries dispCountries={dispCountries} />
        </main>
    );
}

export default Home;
