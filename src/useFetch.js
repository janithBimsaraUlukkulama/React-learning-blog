import { useEffect, useState } from "react";

// In resct custome hooks need to start with'use'
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetchthe data for that resource');
                }
                return res.json();

            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);

            }).catch(err => {
                setIsLoading(false);
                setError(err.message);

            });
    });

    return { data, isLoading, error };

};

export default useFetch;