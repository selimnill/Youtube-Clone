import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";


export const Context = createContext();

export const AppContext = (props) => {

    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategories);
    }, [selectedCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            console.log((contents))
            setSearchResult(contents);
            setLoading(false);
        })
    }

    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResult,
            setSearchResult,
            selectedCategories,
            setSelectedCategories,
            mobileMenu,
            setMobileMenu,

        }}>
        {props.children}
        </Context.Provider>
    );

};
