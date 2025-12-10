import { useEffect, useState } from "react";
import countries from "../data.json";
import SearchFilter from "../Components/SearchFilter";
import Countries from "../Components/Countries";

function Home() {
    const [filterStat, setFilterStat] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("");
    const [searchInput, setSearchInput] = useState<string>("");
    const [allCountries, setAllCountries] = useState<any[]>([]);
    const [dispCountries, setDispCountries] = useState<any[]>([]);

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

    useEffect(() => {
        setAllCountries(countries);
    }, []);

    useEffect(() => {
        setDispCountries(allCountries);
    }, [allCountries]);

    useEffect(
        function searchFilter() {
            if (searchInput === "") {
                setDispCountries(allCountries);
            } else {
                setDispCountries(
                    allCountries.filter((filtered) =>
                        filtered.name
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
        <>
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

export default Home;
