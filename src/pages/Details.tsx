import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function Details() {
    const navigate = useNavigate();
    const location = useLocation();
    const countryName = location.state;

    const [countryData, setCountryData] = useState<any>(null);
    const [borderCountries, setBorderCountries] = useState<any[]>([]);

    async function abvToObject(border: string) {
        try {
            const res = await axios.get(
                `https://restcountries.com/v3.1/alpha?codes=${border}`
            );
            return res.data[0]; // <-- Return the actual country object
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    useEffect(() => {
        if (!countryData?.borders) return;

        async function fetchBorders() {
            const fetched = await Promise.all(
                countryData.borders.map((code: string) => abvToObject(code))
            );
            setBorderCountries(fetched);
        }

        fetchBorders();
    }, [countryData]);

    useEffect(() => {
        async function getCountries() {
            try {
                const response = await axios.get(
                    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
                );
                setCountryData(response.data?.[0]);
            } catch (error: any) {
                console.error("Error fetching countries:", error.message);
            }
        }

        getCountries();
    }, [countryName]);

    return (
        <main className="px-4 w-full max-w-7xl mx-auto md:px-14 lg:px-4 ">
            <button
                className="shadow-btn-shadow rounded-xs py-1 px-5 cursor-pointer"
                onClick={() => navigate(-1)}
            >
                <span className="flex gap-2 items-center text-base font-extralight">
                    <IoIosArrowRoundBack className="text-2xl" />
                    Back
                </span>
            </button>

            <section className="my-16 lg:flex justify-between items-center gap-25">
                <div className="mb-12 shadow-lg h-55 md:h-105 lg:w-1/2">
                    <img
                        src={countryData?.flags?.svg}
                        alt={countryData?.flags?.alt}
                        className="w-full h-full object-cover"
                    />
                </div>
                <article className="flex flex-col gap-10 lg:w-1/2">
                    <h2 className="text-xl font-bold  md:text-4xl ">
                        {countryData?.name?.common}
                    </h2>
                    <section className="flex flex-col gap-10 md:flex-row lg:justify-between">
                        <div>
                            <p className="font-semibold text-sm mb-3 md:text-base">
                                <span> Native Name:</span>{" "}
                                <span className="font-light">
                                    {(
                                        Object.values(
                                            countryData?.name?.nativeName || {}
                                        )[0] as {
                                            common?: string;
                                        }
                                    )?.common || countryData?.name?.common}
                                </span>
                            </p>
                            <p className="font-semibold text-sm mb-3 md:text-base">
                                <span> Population:</span>{" "}
                                <span className="font-light">
                                    {countryData?.population?.toLocaleString()}
                                </span>
                            </p>
                            <p className="font-semibold text-sm mb-3 md:text-base">
                                <span>Region:</span>{" "}
                                <span className="font-light">
                                    {countryData?.region}
                                </span>
                            </p>
                            <p className="font-semibold text-sm mb-3 md:text-base">
                                <span> Sub Region:</span>{" "}
                                <span className="font-light">
                                    {countryData?.subregion}
                                </span>
                            </p>
                            <p className="font-semibold text-sm mb-3 md:text-base">
                                <span> Capital:</span>{" "}
                                <span className="font-light">
                                    {countryData?.capital}
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-sm mb-3 md:text-base">
                                <span> Top Level Domain:</span>{" "}
                                <span className="font-light">
                                    {countryData?.tld.join(", ")}
                                </span>
                            </p>
                            <p className="font-semibold text-sm mb-3 md:text-base">
                                <span> Currencies:</span>{" "}
                                <span className="font-light">
                                    {countryData &&
                                        Object.values(countryData?.currencies)
                                            .map((c: any) => c.name)
                                            .join(", ")}
                                </span>
                            </p>
                            <p className="font-semibold text-sm mb-3 md:text-base">
                                <span> Languages:</span>{" "}
                                {countryData &&
                                    Object.values(
                                        countryData?.languages || {}
                                    ).map((langs: any, i: number, arr: any) => (
                                        <span
                                            key={langs[i]}
                                            className="font-light"
                                        >
                                            {langs}
                                            {i < arr.length - 1 && ", "}
                                        </span>
                                    ))}
                            </p>
                        </div>
                    </section>
                    <div className="md:flex gap-4">
                        <p className="font-semibold text-md mb-4 md:text-lg w-full max-w-fit whitespace-nowrap">
                            Border Countries:
                        </p>
                        {borderCountries.length === 0 ? (
                            <span className="font-light text-sm">
                                No Border Country
                            </span>
                        ) : (
                            <div className="flex gap-3 flex-wrap">
                                {borderCountries.map((bdrCountry: any) => (
                                    <Link
                                        className="shadow-link-shadow rounded-xs py-1.5 px-7 text-xs font-extralight flex items-center w-full max-w-fit bg-element md:text-base "
                                        key={bdrCountry.name.common}
                                        to={`/Details/${bdrCountry.region}/${bdrCountry.name.common}`}
                                        state={bdrCountry.name.common}
                                    >
                                        {bdrCountry.name.common}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Details;
