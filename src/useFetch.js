import { useEffect, useState } from "react";

// In resct custome hooks need to start with'use'
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
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
                if (err.name === 'AbortError') {
                    console.log('fetch was aborted');

                } else {
                    setIsLoading(false);
                    setError(err.message);
                }
            });

        return () => {
            // cleanup function
            abortCont.abort();
        }
    }, [url]);

    return { data, isLoading, error };

};

export default useFetch;