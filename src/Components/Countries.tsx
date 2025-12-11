import { Link } from "react-router";

interface CountriesProp {
    dispCountries: any;
}

function Countries({ dispCountries }: CountriesProp) {
    return (
        <section className="flex flex-col justify-center items-center my-15 gap-15">
            {dispCountries.map((country: any) => (
                <div
                    className="max-w-66 w-full shadow-md rounded-md overflow-hidden"
                    key={country.name}
                >
                    <Link
                        to={`Details/${country.region}/${country.name}`}
                        state={country}
                    >
                        <div className="w-full h-40">
                            <img
                                src={country.flags.svg}
                                alt={`Flag of ${country.name}`}
                                className=" w-full h-full object-cover"
                            />
                        </div>

                        <article className="bg-element px-6 pt-6 pb-12 ">
                            <h3 className="text-lg mb-4 font-bold">
                                {country.name}
                            </h3>
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
    );
}

export default Countries;
