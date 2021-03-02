import { useEffect, useState, React, useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./RecipeContext";

import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BoxLoading } from "react-loadingg";
// const [counter, setCounter] = useState(0);

export const Recipes = () => {
  const APP_ID = "fadc45b1";
  const APPLICATION_KEY = "79c47afab7fe3b1c3b5083956f314701";

  const [search, setSearch] = useState(undefined);
  const [recipes, setRecipes] = useState([]);
  const [perPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const handlePageClick = (e) => {
  //   const pageSelected = e.selected;
  //   setPageCount(pageSelected);
  //   setLoading(true);
  //   getRecipes(pageSelected);
  // };
  // useEffect(() => {
  //   getRecipes(pageCount);
  // }, [pageCount]);
  // useEffect(() => {
  //   const parsedCount = localStorage.getItem("search");
  //   setSearch(parsedCount);
  //   getRecipes();
  // }, []);

  // const updateSearch = (e) => {
  //   setSearch(e.target.value);
  //   // console.log(search);
  // };

  // const getRecipes = async (pageNumber = 1) => {
  //   const from = (pageNumber - 1) * perPage;
  //   const to = from + perPage;
  //   console.log(from, to);
  //   const res = await fetch(
  //     `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APPLICATION_KEY}&from=0&to=100`
  //   );
  //   const data = await res.json();
  //   setRecipes(data.hits.slice(from, to));
  //   setLoading(false);
  //   setTotalPages(data.hits.length / perPage);
  // };
  // const searchRecipe = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("search", search);
  //   setLoading(true);
  //   getRecipes();
  // };
  const context = useContext(RecipeContext);

  return (
    <div>
      <form onSubmit={(e) => context.searchRecipe(e)} className="search-form">
        <input
          type="text"
          className="search-bar"
          name="name"
          placeholder="Find a recipe"
          onChange={(e) => context.updateSearch(e)}
          value={search}
        />

        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} fixedWidth />
        </button>
      </form>
      <div class="recipe-list">
        {context.loading ? (
          <BoxLoading />
        ) : (
          context.recipes.map((recipe, index) => (
            <Recipe
              key={index}
              ingredients={recipe.recipe.ingredients}
              label={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
            />
          ))
        )}
      </div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={context.totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(e) => context.handlePageClick(e)}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};
