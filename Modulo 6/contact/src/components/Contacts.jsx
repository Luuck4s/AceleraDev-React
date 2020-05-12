import React from "react";

class Contacts extends React.Component {
  render() {
    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <span className="contacts__column__avatar" />
          <span className="contacts__columns">Nome</span>
          <span className="contacts__columns">Telefone</span>
          <span className="contacts__columns">País</span>
          <span className="contacts__columns">Admissão</span>
          <span className="contacts__columns">Empresa</span>
          <span className="contacts__columns">Departamento</span>
        </section>
        {this.props.children}
      </div>
    );
  }
}

export default Contacts;
