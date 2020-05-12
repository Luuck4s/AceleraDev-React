import React from "react";

import ButtonFilter from "./ButtonFilter";

class Filters extends React.Component {
  render() {
    const {handleSearchInput} = this.props;

    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={e => handleSearchInput(e.target.value)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <ButtonFilter name="name" title="Nome" {...this.props} />

          <ButtonFilter name="country" title="Páis" {...this.props} />

          <ButtonFilter name="company" title="Empresa" {...this.props} />

          <ButtonFilter
            name="department"
            title="Departamento"
            {...this.props}
          />

          <ButtonFilter
            name="admissionDate"
            title="Data de admissão"
            {...this.props}
          />
        </section>
      </div>
    );
  }
}

export default Filters;
