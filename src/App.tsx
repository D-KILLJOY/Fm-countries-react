import axios from "axios";

import Header from "./Components/Header";

function App() {
    async function getCountries() {
        try {
            const response = await axios.get(
                "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
            );
            console.log(response.data); // full list of countries
        } catch (error: any) {
            console.error("Error fetching countries:", error.message);
        }
    }

    getCountries();
    return (
        <>
            <Header />
        </>
    );
}

export default App;
