interface CountriesProp {
    dispCountries: any;
}

function Countries({ dispCountries }: CountriesProp) {
    console.log(dispCountries);
    return (
        <section className="flex flex-col justify-center items-center my-15 gap-15">
            {dispCountries.map((country: any) => (
                <div
                    className="max-w-2xs w-full shadow-lg rounded-md overflow-hidden"
                    key={country.name.official}
                >
                    <div className="w-full h-45">
                        <img
                            src={country.flags.svg}
                            alt={`Flag of ${country.name.common}`}
                            className=" w-full h-full object-cover"
                        />
                    </div>

                    <article className="bg-element px-6 pt-7 pb-12 ">
                        <h3 className="text-xl mb-5 font-bold">
                            {country.name.common}
                        </h3>
                        <p className="font-medium mb-1">
                            Population:{" "}
                            <span className="font-extralight opacity-90 ">
                                {country.population}
                            </span>
                        </p>
                        <p className="font-medium mb-1">
                            Region:{" "}
                            <span className="font-extralight opacity-90">
                                {country.region}
                            </span>
                        </p>
                        <p className="font-medium">
                            Capital:{" "}
                            <span className="font-extralight opacity-90">
                                {country.capital}
                            </span>
                        </p>
                    </article>
                </div>
            ))}
        </section>
    );
}

export default Countries;
