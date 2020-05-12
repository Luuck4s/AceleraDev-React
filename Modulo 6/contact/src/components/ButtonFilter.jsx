import React from "react";

class ButtonFilter extends React.Component {
  render() {
    const { name, title, selectedFilter, handleFilter } = this.props;

    return (
      <button
        className={`filters__item ${selectedFilter === name && "is-selected"}`}
        onClick={() => handleFilter(name)}
      >
        {title} <i className="fas fa-sort-down" />
      </button>
    );
  }
}

export default ButtonFilter;
