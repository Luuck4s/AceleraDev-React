import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";

import api from "./services/api";

import "./App.scss";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    const loadContacts = async () => {
      const response = await api.get("/contacts");

      this.setState({ contacts: response.data });
    };

    loadContacts();
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <div className="container">
          <Filters />
        </div>
        <div className="container">
          <Contacts>
            {this.state.contacts.map((contact) => (
              <Contact key={contact.id} {...contact} />
            ))}
          </Contacts>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
