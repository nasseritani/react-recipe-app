import { useEffect, useState, React, createContext } from "react";
import Recipe from "./Recipe";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Favorite from "./Favorite";
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const APP_ID = "fadc45b1";
  const APPLICATION_KEY = "79c47afab7fe3b1c3b5083956f314701";

  const [search, setSearch] = useState(undefined);
  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipe, setFavoriteRecipe] = useState([]);
  const [perPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const handlePageClick = (e) => {
    const pageSelected = e.selected;
    setPageCount(pageSelected);
    setLoading(true);
    getRecipes(pageSelected);
  };
  useEffect(() => {
    getRecipes(pageCount);
  }, [pageCount]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getRecipes = async (pageNumber = 1) => {
    const from = (pageNumber - 1) * perPage;
    const to = from + perPage;
    console.log(from, to);
    const res = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APPLICATION_KEY}&from=0&to=100`
    );
    const data = await res.json();
    setRecipes(data.hits.slice(from, to));
    setFavoriteRecipe(data.hits);
    setLoading(false);
    setTotalPages(data.hits.length / perPage);
    return recipes;
  };
  const searchRecipe = (e) => {
    e.preventDefault();
    localStorage.setItem("search", search);
    setLoading(true);
    getRecipes();
  };
  return (
    <div>
      <RecipeContext.Provider
        value={{
          recipes,
          loading,
          totalPages,
          searchRecipe,
          updateSearch,
          favoriteRecipe,
          handlePageClick
        }}
      >
        {children}
      </RecipeContext.Provider>
    </div>
  );
};
