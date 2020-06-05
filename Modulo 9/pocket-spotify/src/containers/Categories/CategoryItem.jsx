import React from "react";
import { Link } from "react-router-dom";
import Ink from "react-ink";

const CategoryItem = ({ id, icon, name, url }) => (
  <div
    className="categories__item"
    data-testid="category"
    style={{ backgroundImage: `url(${icon.url})` }}
  >
    <Link to={`${url}/${id}`} className="categories__item__link">
      <span className="categories__item__title">{name}</span>

      <Ink />
    </Link>
  </div>
);

export default CategoryItem;
