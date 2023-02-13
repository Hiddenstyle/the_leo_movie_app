import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [loadedData, setLoadedData] = useState(null);

    useEffect( () => {
        fetch(url)
        .then( response => {
                return (response.json());
            }   
        )
        .then( responseJson => {
                setLoadedData(responseJson.results);
            }
        )
    }, [url]);

    return {loadedData};
}
 
export default useFetch;