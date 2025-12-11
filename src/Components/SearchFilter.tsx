import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

interface FilterProps {
    fltrStat: boolean;
    fltrStatFunc: () => void;
    fltr: string;
    selFltrFunc: (selRegion: string) => void;
    updSrch: (val: string) => void;
}

function Search({
    fltrStat,
    fltrStatFunc,
    fltr,
    selFltrFunc,
    updSrch,
}: FilterProps) {
    return (
        <section className="px-4 flex flex-col gap-10 ">
            <label
                className="max-w-md h-13 rounded-lg py-2.5 ps-8 pe-4  bg-element flex items-center gap-5 shadow-md"
                aria-label="input-sec"
            >
                <FaSearch className="text-xl" />
                <input
                    type="text"
                    name="input-sec"
                    className="w-full h-full border-0 outline-0 placeholder:text-main-text"
                    placeholder="Search for a country..."
                    onChange={(e) => updSrch(e.target.value)}
                />
            </label>

            <div
                className="w-52 bg-element py-4 ps-7 pe-5 rounded-lg shadow-md relative"
                onClick={fltrStatFunc}
            >
                <p className="flex items-center justify-between text-sm">
                    {fltr === "" ? (
                        <>
                            {" "}
                            Filter by Region <FaAngleDown />{" "}
                        </>
                    ) : (
                        fltr
                    )}
                </p>
                {fltrStat === true && (
                    <ul className="absolute w-full bg-element left-0 top-14  py-4 px-8 rounded-lg flex flex-col gap-2 text-sm shadow-md">
                        <li onClick={() => selFltrFunc("Africa")}> Africa</li>
                        <li onClick={() => selFltrFunc("Americas")}>America</li>
                        <li onClick={() => selFltrFunc("Asia")}>Asia</li>
                        <li onClick={() => selFltrFunc("Europe")}>Europe</li>
                        <li onClick={() => selFltrFunc("Oceania")}>Oceania</li>
                        <li onClick={() => selFltrFunc("")}> Show all</li>
                    </ul>
                )}
            </div>
        </section>
    );
}

export default Search;
