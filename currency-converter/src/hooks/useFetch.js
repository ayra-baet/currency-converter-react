import { useState, useEffect } from "react";

function useFetch(currency) {
    const [data, setData] = useState("");

    useEffect(() => {
        const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;

        const fetchRates = async () => {
            try {
                const res = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${currency}`);

                if (!res.ok) {
                    throw new Error("Error in fetching exchange rates");
                }

                const json = await res.json();
                setData(json.data);
            } catch(err) {
                console.error(err);
            }
        }
        
        fetchRates();
    }, [currency])

    return data;
}

export { useFetch };