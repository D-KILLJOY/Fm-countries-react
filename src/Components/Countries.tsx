import { Link } from "react-router";

interface CountriesProp {
    dispCountries: any;
}

function Countries({ dispCountries }: CountriesProp) {
    return (
        <>
            {dispCountries.length >= 1 ? (
                <section className="grid grid-cols-[repeat(auto-fill,16.5rem)] justify-evenly items-center my-15 mx-auto gap-15 max-w-7xl md:px-14 lg:px-0">
                    {dispCountries.map((country: any) => (
                        <div
                            className="max-w-66 w-full shadow-md rounded-md overflow-hidden"
                            key={country.name.common}
                        >
                            <Link
                                to={`Details/${country.region}/${country.name.common}`}
                                state={country.name.common}
                            >
                                <div className="w-full h-40 ">
                                    <img
                                        src={country.flags.svg}
                                        alt={country.flags.alt}
                                        className=" w-full h-full object-cover"
                                    />
                                </div>

                                <article className="bg-element px-6 pt-6 pb-12 ">
                                    <h2 className="text-lg mb-4 font-bold">
                                        {country.name.common}
                                    </h2>
                                    <p className="font-medium text-sm mb-2">
                                        Population:{" "}
                                        <span className="font-extralight opacity-90 ">
                                            {country.population.toLocaleString()}
                                        </span>
                                    </p>
                                    <p className="font-medium mb-2 text-sm">
                                        Region:{" "}
                                        <span className="font-extralight opacity-90">
                                            {country.region}
                                        </span>
                                    </p>
                                    <p className="font-medium text-sm">
                                        Capital:{" "}
                                        <span className="font-extralight opacity-90">
                                            {country.capital}
                                        </span>
                                    </p>
                                </article>
                            </Link>
                        </div>
                    ))}
                </section>
            ) : (
                <div className="flex flex-col justify-center text-center my-20">
                    <h2 className="text-lg mb-2 font-bold">
                        Sorry, Country Not Found
                    </h2>
                    <p className="font-semibold text-sm mb-3 md:text-base">
                        Please Edit search Input or Filter
                    </p>
                </div>
            )}
        </>
    );
}

export default Countries;
