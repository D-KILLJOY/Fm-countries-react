import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import countries from "../data.json";

function Details() {
    const navigate = useNavigate();
    const location = useLocation();
    const countryData = location.state;

    function abvToObject(border: string) {
        const country = countries.find(
            (country: any) => country.alpha3Code === border
        );

        return country;
    }

    return (
        <main className="px-4">
            <button
                className="shadow-btn-shadow rounded-xs py-1 px-5 "
                onClick={() => navigate(-1)}
            >
                <span className="flex gap-2 items-center text-base font-extralight">
                    <IoIosArrowRoundBack className="text-2xl" />
                    Back
                </span>
            </button>
            <section className="my-16">
                <div className="mb-12 shadow-lg h-55">
                    <img
                        src={countryData.flags.svg}
                        alt={`flag of ${countryData.name}`}
                        className="w-full h-full object-cover"
                    />
                </div>
                <article className="flex flex-col gap-10">
                    <section className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-xl font-bold mb-6">
                                {countryData.name}
                            </h2>
                            <p className="font-semibold text-sm mb-3">
                                <span> Native Name:</span>{" "}
                                <span className="font-light">
                                    {countryData.nativeName}
                                </span>
                            </p>
                            <p className="font-semibold text-sm mb-3">
                                <span> Population:</span>{" "}
                                <span className="font-light">
                                    {countryData.population.toLocaleString()}
                                </span>
                            </p>
                            <p className="font-semibold text-sm mb-3">
                                <span>Region:</span>{" "}
                                <span className="font-light">
                                    {countryData.region}
                                </span>
                            </p>
                            <p className="font-semibold text-sm mb-3">
                                <span> Sub Region:</span>{" "}
                                <span className="font-light">
                                    {countryData.subregion}
                                </span>
                            </p>
                            <p className="font-semibold text-sm mb-3">
                                <span> Capital:</span>{" "}
                                <span className="font-light">
                                    {countryData.capital}
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-sm mb-3">
                                <span> Top Level Domain:</span>{" "}
                                <span className="font-light">
                                    {countryData.topLevelDomain}
                                </span>
                            </p>
                            <p className="font-semibold text-sm mb-3">
                                <span> Currencies:</span>{" "}
                                <span className="font-light">
                                    {countryData.currencies[0].name}
                                </span>
                            </p>
                            <p className="font-semibold text-sm mb-3">
                                <span> Languages:</span>{" "}
                                {countryData.languages.map(
                                    (lang: any, i: number, arr: []) => (
                                        <span
                                            key={lang.name}
                                            className="font-light"
                                        >
                                            {lang.name}
                                            {i < arr.length - 1 && ", "}
                                        </span>
                                    )
                                )}
                            </p>
                        </div>
                    </section>
                    <div>
                        <p className="font-semibold text-md mb-4">
                            Border Countries:{" "}
                        </p>
                        {countryData.borders === undefined ? (
                            <span className="font-light text-sm">
                                No Border Country
                            </span>
                        ) : (
                            <div className="flex gap-3 flex-wrap">
                                {countryData.borders.map((border: any) => {
                                    const bdrCountry = abvToObject(border);
                                    return (
                                        <Link
                                            className="shadow-link-shadow rounded-xs py-1.5 px-7 text-xs font-extralight flex items-center w-full max-w-fit bg-element"
                                            key={border}
                                            to={`/Details/${bdrCountry?.region}/${bdrCountry?.name}`}
                                            state={bdrCountry}
                                        >
                                            {bdrCountry?.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Details;
