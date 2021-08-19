import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import algoliasearch from "algoliasearch";
import FoodIllus from "assets/images/food-illus.png";
import MainHeader from "components/MainHeader";
import "./style.scss";
import SearchInput from "components/SearchInput";
import { set } from "store/dist/store.modern.min";

const { REACT_APP_ALGO_APP_ID, REACT_APP_ALGO_ADMIN_API_KEY } = process.env;

const client = algoliasearch(
  REACT_APP_ALGO_APP_ID,
  REACT_APP_ALGO_ADMIN_API_KEY
);
const index = client.initIndex("dev_BUSINESSES");

const LandingPage = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query.length > 1) {
      // trigger search method after user stops typing for 1 second
      const timeOutId = setTimeout(() => onSearch(query), 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [query]);

  const onSearch = (value) => {
    console.log("You searched: ", value);

    index
      .search(value)
      .then(({ hits }) => {
        console.log("resule", hits);
        setSearchResults(hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Helmet title="Home" />
      <MainHeader />

      <div className="m-body">
        <div className="d-flex flex-row justify-content-around">
          <div className="m-text">
            <label className="highlight">Find</label> your favorite restaurent{" "}
            <label className="highlight"> menu</label> anytime, anywhere.
            <div className="my-5">
              <SearchInput
                onSearch={onSearch}
                onChange={setQuery}
                placeholder="Type restaurant name"
                showSuggestions={query.length > 1}
                searchResults={searchResults}
              />
            </div>
          </div>

          <img
            width="500px"
            height="500px"
            src={FoodIllus}
            alt="food illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
