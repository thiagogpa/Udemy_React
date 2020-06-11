import React, { Component } from "react";
import "./App.css";

import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Thiago</h1>
        <SearchBox
          placeholder="Search monster"
          handleChange={(e) =>
            this.setState({
              searchField: e.target.value,
            })
          }
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
