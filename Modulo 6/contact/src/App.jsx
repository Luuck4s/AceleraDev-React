import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";

import orderBy from "./utils";

import api from "./services/api";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      filteredContacts: [],
      selectedFilter: null,
      searchText: "",
    };
  }

  componentDidMount() {
    const loadContacts = async () => {
      let response = await fetch(api);

      response = await response.json();

      this.setState({ contacts: response, filteredContacts: response });
    };

    loadContacts();
  }

  handleFilter = (filter) => {
    this.setState({ selectedFilter: filter });

    const { contacts } = this.state;

    const newContacts = orderBy(contacts, filter);

    this.setState({ filteredContacts: newContacts });
  };

  handleSearch = (text) => {
    this.setState({ searchText: text.trim() });

    if (this.state.searchText) {
      const { contacts } = this.state;

      const filteredContacts = contacts.filter((contact) =>
        contact.name
          .toLowerCase()
          .includes(this.state.searchText.toLocaleLowerCase())
      );

      this.setState({
        filteredContacts,
      });
    }
  };

  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar />
        <div className="container">
          <Filters
            handleFilter={this.handleFilter}
            selectedFilter={this.state.selectedFilter}
            handleSearchInput={this.handleSearch}
          />
        </div>
        <div className="container">
          <Contacts>
            {this.state.filteredContacts.map((contact) => (
              <Contact key={contact.id} data={contact} />
            ))}
          </Contacts>
        </div>
      </div>
    );
  }
}

export default App;
