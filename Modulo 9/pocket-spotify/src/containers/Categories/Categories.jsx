import React from "react";
import { Loading } from "../../components";

import CategoryItem from "./CategoryItem";

import "./Categories.scss";

const Categories = ({ data = [], isLoading, url }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="categories" data-testid="categories">
          <div className="container">
            <h3 className="categories__title">Categorias</h3>
            <div className="categories__content">
              {data.map((category) => (
                <CategoryItem
                  icon={category.icons[0]}
                  id={category.id}
                  key={category.id}
                  name={category.name}
                  url={url}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Categories;
